
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

// Hook for fetching site statistics
export const useSiteStatistics = () => {
  return useQuery({
    queryKey: ['site-statistics'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_statistics')
        .select('*')
        .eq('is_active', true)
        .order('display_order');
      
      if (error) throw error;
      return data || [];
    },
  });
};

// Hook for fetching testimonials
export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
  });
};

// Hook for fetching companies
export const useCompanies = () => {
  return useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('companies')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data || [];
    },
  });
};

// Hook for fetching resource categories
export const useResourceCategories = () => {
  return useQuery({
    queryKey: ['resource-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('resource_categories')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data || [];
    },
  });
};

// Hook for fetching resources
export const useResources = (categoryId?: string, featured?: boolean) => {
  return useQuery({
    queryKey: ['resources', categoryId, featured],
    queryFn: async () => {
      let query = supabase
        .from('resources')
        .select(`
          *,
          resource_categories (
            name,
            slug,
            color
          )
        `)
        .eq('is_published', true)
        .order('created_at', { ascending: false });
      
      if (categoryId) {
        query = query.eq('category_id', categoryId);
      }
      
      if (featured) {
        query = query.eq('is_featured', true);
      }
      
      const { data, error } = await query;
      
      if (error) throw error;
      return data || [];
    },
  });
};

// Hook for checking user roles
export const useUserRole = () => {
  return useQuery({
    queryKey: ['user-role'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return null;
      
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();
      
      if (error && error.code !== 'PGRST116') throw error;
      return data?.role || 'user';
    },
  });
};
