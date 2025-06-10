
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthContext'
import { 
  Users, 
  Briefcase, 
  Building, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Settings,
  LogOut,
  LayoutDashboard
} from 'lucide-react'
import { cn } from '@/lib/utils'

const AdminLayout = () => {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: Briefcase, label: 'Jobs', path: '/admin/jobs' },
    { icon: Building, label: 'Companies', path: '/admin/companies' },
    { icon: FileText, label: 'Resources', path: '/admin/resources' },
    { icon: MessageSquare, label: 'Testimonials', path: '/admin/testimonials' },
    { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ]

  const handleSignOut = async () => {
    await signOut()
    navigate('/auth')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-german-primary">Admin Panel</h1>
          <p className="text-sm text-german-muted">UgandaJobsGermany</p>
        </div>
        
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = window.location.pathname === item.path
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors',
                  isActive 
                    ? 'bg-german-primary text-white' 
                    : 'text-german-dark hover:bg-gray-100'
                )}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="absolute bottom-0 w-64 p-4 border-t bg-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-german-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-german-dark truncate">
                {user?.email}
              </p>
              <p className="text-xs text-german-muted">Administrator</p>
            </div>
          </div>
          <Button 
            onClick={handleSignOut}
            variant="outline" 
            size="sm" 
            className="w-full"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
