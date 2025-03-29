import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const FAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Frequently Asked Questions - UgandajobsGermany"
        description="Find answers to frequently asked questions about working in Germany as a Ugandan professional. Learn about visa requirements, job applications, qualifications recognition, and more."
        keywords="Germany FAQ, working in Germany questions, visa FAQ Uganda, relocation questions, job application FAQ, expat questions"
        canonical="https://ugandajobsgermany.online/faq"
        ogType="website"
      />
      <Header />
      <main className="flex-grow">
        {/* FAQ Page Content */}
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
