
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Briefcase, Building, MessageSquare } from 'lucide-react'
import { useSiteStatistics, useTestimonials, useCompanies } from '@/hooks/useSupabaseData'

const AdminDashboard = () => {
  const { data: stats = [] } = useSiteStatistics()
  const { data: testimonials = [] } = useTestimonials()
  const { data: companies = [] } = useCompanies()

  const dashboardStats = [
    {
      title: 'Total Users',
      value: stats.find(s => s.stat_key === 'total_users')?.stat_value || '0',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Jobs',
      value: stats.find(s => s.stat_key === 'active_jobs')?.stat_value || '0',
      icon: Briefcase,
      color: 'text-green-600'
    },
    {
      title: 'Companies',
      value: companies.length.toString(),
      icon: Building,
      color: 'text-purple-600'
    },
    {
      title: 'Testimonials',
      value: testimonials.length.toString(),
      icon: MessageSquare,
      color: 'text-orange-600'
    }
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-german-dark">Dashboard</h1>
        <p className="text-german-muted">Welcome to the admin dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardStats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-german-muted">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-german-dark">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Testimonials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {testimonials.slice(0, 5).map((testimonial) => (
                <div key={testimonial.id} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-german-primary rounded-full flex items-center justify-center text-white text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-german-muted line-clamp-2">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Companies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {companies.slice(0, 5).map((company) => (
                <div key={company.id} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    {company.logo_url ? (
                      <img 
                        src={company.logo_url} 
                        alt={company.name}
                        className="w-full h-full object-cover rounded"
                      />
                    ) : (
                      <Building className="h-4 w-4 text-gray-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{company.name}</p>
                    <p className="text-xs text-german-muted">{company.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AdminDashboard
