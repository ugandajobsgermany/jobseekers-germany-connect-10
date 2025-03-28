
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CodeIcon, HeartPulse, LightbulbIcon, LineChart, GraduationCap, ShoppingBag, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'it',
    name: 'IT & Technology',
    icon: CodeIcon,
    count: 342,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: HeartPulse,
    count: 219,
    color: 'bg-red-100 text-red-600'
  },
  {
    id: 'engineering',
    name: 'Engineering',
    icon: Settings,
    count: 187,
    color: 'bg-gray-100 text-gray-600'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: LightbulbIcon,
    count: 156,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: LineChart,
    count: 143,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 'education',
    name: 'Education',
    icon: GraduationCap,
    count: 98,
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    id: 'sales',
    name: 'Sales',
    icon: ShoppingBag,
    count: 124,
    color: 'bg-indigo-100 text-indigo-600'
  }
];

const CategorySection = () => {
  return (
    <section className="container mx-auto py-8 md:py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-german-dark mb-2">Browse Jobs by Category</h2>
        <p className="text-german-muted text-sm max-w-2xl mx-auto">
          Explore job opportunities across various industries in Germany
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {categories.map((category) => (
          <Link to={`/jobs?category=${category.id}`} key={category.id}>
            <Card className="cursor-pointer card-hover h-full border-none shadow-none">
              <CardContent className="p-3 flex flex-col items-center text-center">
                <div className={`p-2 rounded-lg ${category.color} mb-2`}>
                  <category.icon className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-german-dark">{category.name}</h3>
                <p className="text-german-muted text-xs mt-1">{category.count} Open Positions</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
