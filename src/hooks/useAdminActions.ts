
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { runFullMigration } from '@/utils/dataMigration';

export const useAdminActions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const makeUserAdmin = async (userId: string) => {
    try {
      setIsLoading(true);
      const { error } = await supabase
        .from('user_roles')
        .insert({
          user_id: userId,
          role: 'admin'
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "User has been granted admin access.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to grant admin access.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const migrateMockData = async () => {
    try {
      setIsLoading(true);
      await runFullMigration();
      
      toast({
        title: "Migration Complete",
        description: "All mock data has been successfully migrated to Supabase.",
      });
    } catch (error: any) {
      toast({
        title: "Migration Failed",
        description: error.message || "Failed to migrate data.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    makeUserAdmin,
    migrateMockData,
    isLoading
  };
};
