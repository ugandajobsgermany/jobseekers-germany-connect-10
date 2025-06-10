
-- First, let's insert the user into the profiles table with the specified credentials
-- Note: In Supabase, we need to create the user through the auth system first
-- This SQL will assign admin role to a user with the email "ugandajobsgermany"

-- Insert or update the user role to admin for the specified user
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM public.profiles 
WHERE email = 'ugandajobsgermany'
ON CONFLICT (user_id, role) 
DO UPDATE SET role = 'admin'::app_role;

-- If the user doesn't exist yet, we'll need to create them through the signup process
-- But let's also ensure we have a way to make any user with that email an admin
INSERT INTO public.user_roles (user_id, role)
SELECT auth.uid(), 'admin'::app_role
WHERE auth.email() = 'ugandajobsgermany'
ON CONFLICT (user_id, role) 
DO UPDATE SET role = 'admin'::app_role;
