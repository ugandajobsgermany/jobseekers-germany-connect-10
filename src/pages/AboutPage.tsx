
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Building, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <section className="bg-german-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About JobseekerGermany</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Connecting international talent with the best career opportunities across Germany
            </p>
          </div>
        </section>
        
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-german-dark mb-8">Our Mission</h2>
            <p className="text-lg mb-8">
              JobseekerGermany was founded with a clear mission: to bridge the gap between international talent and German employers. 
              We believe that diversity drives innovation, and by helping skilled professionals from around the world find 
              opportunities in Germany, we contribute to the country's economic growth and cultural enrichment.
            </p>
            
            <h2 className="text-3xl font-bold text-german-dark mb-8 mt-12">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 2018 by a team of expats who experienced firsthand the challenges of finding employment in Germany, 
              JobseekerGermany has grown from a small job board to a comprehensive platform serving thousands of job seekers 
              and companies across the country.
            </p>
            <p className="text-lg mb-8">
              Our founders recognized that while Germany offered excellent career opportunities, navigating the job market 
              as an international professional presented unique challenges - from language barriers to understanding local 
              work culture and visa requirements. JobseekerGermany was created to address these challenges head-on.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
              <Card>
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-german-light mb-4">
                    <Users className="h-8 w-8 text-german-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">For Job Seekers</h3>
                  <p>
                    We provide curated job listings, resources on German work culture, visa information, 
                    and career guidance to help international professionals find their perfect role in Germany.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-german-light mb-4">
                    <Building className="h-8 w-8 text-german-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">For Employers</h3>
                  <p>
                    We connect German companies with a diverse pool of international talent, 
                    helping them find the skills they need to grow and innovate in a global marketplace.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-3xl font-bold text-german-dark mb-8">Our Team</h2>
            <p className="text-lg mb-8">
              Our diverse team consists of professionals from over 15 countries, bringing together expertise in recruitment, 
              technology, immigration, and career development. United by our passion for connecting talent with opportunity, 
              we work tirelessly to improve the job seeking experience for internationals in Germany.
            </p>
            
            <div className="bg-gray-100 p-8 rounded-lg border border-gray-200 mt-12">
              <h3 className="text-2xl font-bold text-german-dark mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-1 text-german-primary" />
                  <span>Alexanderplatz 1, 10178 Berlin, Germany</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-german-primary" />
                  <span>Phone: +49 30 1234 5678</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-german-primary" />
                  <span>Email: contact@jobseekergermany.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
