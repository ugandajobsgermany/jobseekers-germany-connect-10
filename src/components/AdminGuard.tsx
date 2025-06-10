
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { useUserRole } from '@/hooks/useSupabaseData'
import { Loader } from 'lucide-react'

interface AdminGuardProps {
  children: React.ReactNode
}

const AdminGuard: React.FC<AdminGuardProps> = ({ children }) => {
  const { user, loading: authLoading } = useAuth()
  const { data: userRole, isLoading: roleLoading } = useUserRole()
  const navigate = useNavigate()

  useEffect(() => {
    if (!authLoading && !roleLoading) {
      if (!user) {
        navigate('/auth', { replace: true })
        return
      }
      
      if (userRole !== 'admin') {
        navigate('/', { replace: true })
        return
      }
    }
  }, [user, userRole, authLoading, roleLoading, navigate])

  if (authLoading || roleLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader className="h-12 w-12 animate-spin text-german-primary" />
          <p className="text-lg font-medium text-german-dark">Loading admin access...</p>
        </div>
      </div>
    )
  }

  return user && userRole === 'admin' ? <>{children}</> : null
}

export default AdminGuard
