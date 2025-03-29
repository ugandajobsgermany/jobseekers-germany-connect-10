import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About UgandajobsGermany - Our Mission & Vision"
        description="Learn about UgandajobsGermany's mission to connect Ugandan professionals with career opportunities in Germany. Discover our story, team, and values."
        keywords="UgandajobsGermany mission, about us, Uganda Germany connections, career platform, international employment, job marketplace"
        canonical="https://ugandajobsgermany.online/about"
        ogType="website"
      />
      <Header />
      <main className="flex-grow">
        <div className="bg-german-primary text-white py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl">
              Connecting Ugandan talent with German opportunities
            </p>
          </div>
        </div>

        <section className="container mx-auto py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-8">
              UgandajobsGermany was founded with a clear mission: to bridge the gap between talented Ugandan professionals and the growing job market in Germany. We believe in creating meaningful connections that benefit both Ugandan job seekers looking for international opportunities and German employers seeking skilled, motivated talent.
            </p>
            
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-4">
              Our journey began when our founder, a Ugandan professional who successfully built a career in Germany, recognized the challenges faced by fellow Ugandans trying to navigate the German job market and immigration system. Despite Uganda having a wealth of skilled professionals, there was a lack of structured pathways and resources to connect this talent with opportunities in Germany.
            </p>
            <p className="text-lg mb-8">
              What started as informal mentoring and guidance evolved into UgandajobsGermany - a comprehensive platform dedicated to empowering Ugandan professionals with the knowledge, connections, and resources needed to build successful careers in Germany.
            </p>
            
            <h2 className="text-3xl font-bold mb-6">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-german-primary">For Job Seekers</h3>
                <ul className="space-y-2">
                  <li>• Curated job listings from German employers</li>
                  <li>• Comprehensive visa and immigration guidance</li>
                  <li>• Relocation resources and support</li>
                  <li>• German language learning resources</li>
                  <li>• Cultural integration information</li>
                  <li>• Professional development opportunities</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-german-primary">For Employers</h3>
                <ul className="space-y-2">
                  <li>• Access to a pool of qualified Ugandan talent</li>
                  <li>• Guidance on international hiring processes</li>
                  <li>• Support with visa sponsorship procedures</li>
                  <li>• Cultural integration resources</li>
                  <li>• Long-term retention strategies</li>
                  <li>• Diversity and inclusion enhancement</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p>We operate with transparency and honesty in all our interactions with job seekers and employers.</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p>We strive for the highest standards in our services, resources, and support systems.</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Empowerment</h3>
                <p>We believe in equipping individuals with the knowledge and tools they need to succeed.</p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p>We continuously seek new ways to improve our platform and services.</p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p>We foster connections and support networks among Ugandan professionals in Germany.</p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Impact</h3>
                <p>We measure our success by the positive difference we make in people's lives and careers.</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-lg mb-8">
              Our team consists of professionals with firsthand experience in international career transitions, immigration processes, and cross-cultural workplace dynamics. We combine expertise in career development, recruitment, immigration law, and cultural integration to provide comprehensive support to our community.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-lg mb-6">
                Whether you're a job seeker looking for opportunities in Germany or an employer seeking talented professionals, we invite you to join our growing community.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/jobs" 
                  className="bg-german-primary text-white px-6 py-3 rounded-md hover:bg-german-primary/90 transition-colors"
                >
                  Browse Jobs
                </a>
                <a 
                  href="mailto:ugandajobsgermany@gmail.com" 
                  className="border border-german-primary text-german-primary px-6 py-3 rounded-md hover:bg-german-primary/10 transition-colors"
                >
                  Contact Us
                </a>
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
