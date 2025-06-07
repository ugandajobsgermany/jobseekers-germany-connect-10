
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useSiteStatistics } from '@/hooks/useSupabaseData';
import { Users, Briefcase, Building, Award } from 'lucide-react';

const iconMap = {
  users: Users,
  briefcase: Briefcase,
  building: Building,
  award: Award
};

const StatsSection = () => {
  const { data: stats = [], isLoading } = useSiteStatistics();

  if (isLoading) {
    return (
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="bg-gray-200 animate-pulse h-16 w-16 rounded-full mx-auto mb-4"></div>
                <div className="bg-gray-200 animate-pulse h-6 w-20 mx-auto mb-2 rounded"></div>
                <div className="bg-gray-200 animate-pulse h-4 w-16 mx-auto rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap] || Users;
            return (
              <div key={stat.id} className="text-center">
                <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg flex items-center justify-center">
                  <IconComponent className={`h-8 w-8 ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-german-dark mb-2">{stat.stat_value}</h3>
                <p className="text-german-muted">{stat.stat_label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
