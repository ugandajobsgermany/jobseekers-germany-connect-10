
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CodeIcon, HeartPulse, LightbulbIcon, LineChart, GraduationCap, ShoppingBag, Settings, Hotel, Truck, UtensilsCrossed, Home, Shield, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// Function to fetch jobs
const fetchJobs = async () => {
  // In a real implementation, this would be an API call
  const { mockJobs } = await import('@/data/jobs');
  return mockJobs;
};

const categoryIconMap = {
  'IT & Technology': CodeIcon,
  'Healthcare': HeartPulse,
  'Engineering': Settings,
  'Marketing': LightbulbIcon,
  'Finance': LineChart,
  'Hospitality': Hotel,
  'Education': GraduationCap,
  'Sales': ShoppingBag,
  'Warehouse & Logistics': Truck,
  'Food Service & Hospitality': UtensilsCrossed,
  'Cleaning & Maintenance': Home,
  'Security': Shield,
  'Customer Service': Building,
  'Transportation & Delivery': Truck,
  'Retail & Customer Service': ShoppingBag,
  'Manufacturing': Building,
  'General Labor': Building,
  'Care & Support': HeartPulse
};

const categoryUrlMap = {
  'IT & Technology': 'it',
  'Healthcare': 'healthcare',
  'Engineering': 'engineering',
  'Marketing': 'marketing',
  'Finance': 'finance',
  'Hospitality': 'hospitality',
  'Education': 'education',
  'Sales': 'sales',
  'Warehouse & Logistics': 'warehouse',
  'Food Service & Hospitality': 'food-service',
  'Cleaning & Maintenance': 'cleaning',
  'Security': 'security',
  'Customer Service': 'customer-service',
  'Transportation & Delivery': 'transportation',
  'Retail & Customer Service': 'retail',
  'Manufacturing': 'manufacturing',
  'General Labor': 'general-labor',
  'Care & Support': 'care-support'
};

const categoryColorMap = {
  'IT & Technology': 'bg-blue-100 text-blue-600',
  'Healthcare': 'bg-red-100 text-red-600',
  'Engineering': 'bg-gray-100 text-gray-600',
  'Marketing': 'bg-purple-100 text-purple-600',
  'Finance': 'bg-green-100 text-green-600',
  'Hospitality': 'bg-amber-100 text-amber-600',
  'Education': 'bg-yellow-100 text-yellow-600',
  'Sales': 'bg-indigo-100 text-indigo-600',
  'Warehouse & Logistics': 'bg-blue-100 text-blue-700',
  'Food Service & Hospitality': 'bg-orange-100 text-orange-600',
  'Cleaning & Maintenance': 'bg-teal-100 text-teal-600',
  'Security': 'bg-slate-100 text-slate-600',
  'Customer Service': 'bg-cyan-100 text-cyan-600',
  'Transportation & Delivery': 'bg-sky-100 text-sky-600',
  'Retail & Customer Service': 'bg-pink-100 text-pink-600',
  'Manufacturing': 'bg-emerald-100 text-emerald-600',
  'General Labor': 'bg-violet-100 text-violet-600',
  'Care & Support': 'bg-rose-100 text-rose-600'
};

const CategorySection = () => {
  const { data: jobs = [] } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
  });
  
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (jobs.length === 0) return;
    
    // Count jobs by category
    const categoryCounts = {};
    jobs.forEach(job => {
      if (!categoryCounts[job.category]) {
        categoryCounts[job.category] = 0;
      }
      categoryCounts[job.category]++;
    });
    
    // Convert to array of category objects for display
    // Sort by count (descending) and take top 8
    const categoryItems = Object.keys(categoryCounts)
      .map(name => ({
        id: categoryUrlMap[name] || name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'),
        name,
        icon: categoryIconMap[name] || Building,
        count: categoryCounts[name],
        color: categoryColorMap[name] || 'bg-gray-100 text-gray-600'
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
    
    setCategories(categoryItems);
  }, [jobs]);

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
