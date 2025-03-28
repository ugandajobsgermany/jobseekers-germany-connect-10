
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Briefcase, Building, Award } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: 'Active Job Seekers',
    value: '50,000+',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    id: 2,
    title: 'Job Opportunities',
    value: '10,000+',
    icon: Briefcase,
    color: 'text-purple-600'
  },
  {
    id: 3,
    title: 'Companies',
    value: '5,000+',
    icon: Building,
    color: 'text-green-600'
  },
  {
    id: 4,
    title: 'Success Stories',
    value: '15,000+',
    icon: Award,
    color: 'text-orange-600'
  }
];

const StatsSection = () => {
  return (
    <section className="container mx-auto py-4 md:py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {stats.map((stat) => (
          <Card key={stat.id} className="border-none shadow-none">
            <CardContent className="p-2 flex flex-col items-center text-center">
              <div className={`p-1.5 rounded-full ${stat.color} bg-opacity-10 mb-1`}>
                <stat.icon className={`h-3 w-3 ${stat.color}`} />
              </div>
              <h3 className="text-lg font-bold text-german-dark">{stat.value}</h3>
              <p className="text-german-muted text-xs">{stat.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
