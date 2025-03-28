
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
    <section className="container mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.id} className="border-none shadow-sm">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <div className={`p-2 rounded-full ${stat.color} bg-opacity-10 mb-2`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-german-dark mb-1">{stat.value}</h3>
              <p className="text-german-muted text-sm">{stat.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
