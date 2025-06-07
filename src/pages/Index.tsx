
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FeaturedJobsReal from '@/components/FeaturedJobsReal';
import CategorySectionReal from '@/components/CategorySectionReal';
import TestimonialsSection from '@/components/TestimonialsSection';
import ResourcesSection from '@/components/ResourcesSection';
import CompanySection from '@/components/CompanySection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import OrganizationSchema from '@/components/SEO/OrganizationSchema';
import WebsiteSchema from '@/components/SEO/WebsiteSchema';

const Index = () => {
  return (
    <>
      <SEO 
        title="Uganda Jobs Germany - Find Your Dream Job in Germany"
        description="Discover thousands of job opportunities in Germany for Ugandans. From entry-level positions to professional careers, find your perfect job match with visa sponsorship support."
        keywords="Uganda jobs Germany, jobs in Germany for Ugandans, German jobs, visa sponsorship jobs, work in Germany"
        canonical="https://ugandajobsgermany.online"
      />
      <OrganizationSchema />
      <WebsiteSchema />
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <StatsSection />
          <FeaturedJobsReal />
          <CategorySectionReal />
          <TestimonialsSection />
          <ResourcesSection />
          <CompanySection />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
