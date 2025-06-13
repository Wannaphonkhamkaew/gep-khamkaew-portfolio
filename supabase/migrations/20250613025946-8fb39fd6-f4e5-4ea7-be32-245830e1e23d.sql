
-- Create enum for user roles
CREATE TYPE public.user_role AS ENUM ('admin', 'user');

-- Create users table
CREATE TABLE public.users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role public.user_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_login_at TIMESTAMP WITH TIME ZONE
);

-- Create index on email for faster lookups
CREATE INDEX idx_users_email ON public.users(email);

-- Create index on role for faster role-based queries
CREATE INDEX idx_users_role ON public.users(role);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create policy for users to view their own data
CREATE POLICY "Users can view their own data" 
  ON public.users 
  FOR SELECT 
  USING (id = auth.uid() OR role = 'admin');

-- Create policy for users to update their own data
CREATE POLICY "Users can update their own data" 
  ON public.users 
  FOR UPDATE 
  USING (id = auth.uid());

-- Create policy for admins to view all users
CREATE POLICY "Admins can view all users" 
  ON public.users 
  FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Function to update last_login_at automatically
CREATE OR REPLACE FUNCTION public.update_last_login()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_login_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update last_login_at when user data is updated during login
CREATE TRIGGER trigger_update_last_login
  BEFORE UPDATE ON public.users
  FOR EACH ROW
  WHEN (OLD.last_login_at IS DISTINCT FROM NEW.last_login_at)
  EXECUTE FUNCTION public.update_last_login();
