
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import FeaturedJobs from '@/components/FeaturedJobs';
import StatsSection from '@/components/StatsSection';
import CompanySection from '@/components/CompanySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ResourcesSection from '@/components/ResourcesSection';
import CallToAction from '@/components/CallToAction';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="UgandajobsGermany - Connect with Top German Employers" 
        description="UgandajobsGermany connects Ugandan talents with top employers in Germany. Find your dream job, visa information, and relocation resources."
        canonical="https://ugandajobsgermany.online"
      />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <CategorySection />
        <FeaturedJobs />
        <CompanySection />
        <TestimonialsSection />
        <ResourcesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
