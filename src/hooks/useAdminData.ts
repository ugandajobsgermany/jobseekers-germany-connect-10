
import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'

// Hook for fetching all users with their profiles and roles
export const useAdminUsers = () => {
  return useQuery({
    queryKey: ['admin-users'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select(`
          id,
          email,
          full_name,
          phone_number,
          created_at,
          user_roles (
            role
          )
        `)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data || []
    },
  })
}

// Hook for fetching job applications with user and job details
export const useAdminApplications = () => {
  return useQuery({
    queryKey: ['admin-applications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('job_applications')
        .select(`
          id,
          job_id,
          status,
          applied_at,
          notes,
          profiles (
            full_name,
            email
          )
        `)
        .order('applied_at', { ascending: false })
      
      if (error) throw error
      return data || []
    },
  })
}

// Hook for updating user roles
export const useUpdateUserRole = () => {
  return {
    updateRole: async (userId: string, role: string) => {
      // First, check if user already has a role
      const { data: existingRole } = await supabase
        .from('user_roles')
        .select('id')
        .eq('user_id', userId)
        .single()

      if (existingRole) {
        // Update existing role
        const { error } = await supabase
          .from('user_roles')
          .update({ role })
          .eq('user_id', userId)
        
        if (error) throw error
      } else {
        // Insert new role
        const { error } = await supabase
          .from('user_roles')
          .insert({ user_id: userId, role })
        
        if (error) throw error
      }
    }
  }
}
