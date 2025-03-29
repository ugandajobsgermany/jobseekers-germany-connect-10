
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const VisaInfoPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-german-primary text-white py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">Visa Information for Germany</h1>
            <p className="text-xl max-w-3xl">
              Everything you need to know about German work visas, permits, and immigration procedures
            </p>
          </div>
        </div>

        <div className="container mx-auto py-12">
          <Tabs defaultValue="bluecardvisa" className="w-full">
            <TabsList className="flex flex-wrap justify-start mb-8 border-b border-gray-200 w-full">
              <TabsTrigger value="bluecardvisa" className="text-base px-4 py-2 border-b-2 border-transparent">
                EU Blue Card
              </TabsTrigger>
              <TabsTrigger value="workpermit" className="text-base px-4 py-2 border-b-2 border-transparent">
                Work Permit
              </TabsTrigger>
              <TabsTrigger value="skilledworkers" className="text-base px-4 py-2 border-b-2 border-transparent">
                Skilled Workers
              </TabsTrigger>
              <TabsTrigger value="application" className="text-base px-4 py-2 border-b-2 border-transparent">
                Application Process
              </TabsTrigger>
              <TabsTrigger value="documents" className="text-base px-4 py-2 border-b-2 border-transparent">
                Required Documents
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bluecardvisa" className="mt-4">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">EU Blue Card</h2>
                <p className="mb-4">
                  The EU Blue Card is designed for highly qualified professionals from outside the European Union. 
                  It offers an expedited path to permanent residency and provides numerous benefits for both the cardholder and their family members.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Eligibility Requirements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>University degree (at least 3 years of higher education)</li>
                  <li>Job offer in Germany with a gross annual salary of at least €58,400 (2023 figures)</li>
                  <li>For shortage occupations (IT, engineering, medicine): reduced salary threshold of €45,552</li>
                  <li>Employment contract or binding job offer for at least one year</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Benefits</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Permanent residency after 21 months with basic German skills (A1 level)</li>
                  <li>Permanent residency after 33 months without language skills</li>
                  <li>Spouses receive automatic work authorization</li>
                  <li>Possibility to spend time outside of Germany without losing residence rights</li>
                  <li>Simplified process for moving to another EU country after 18 months</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Application Process</h3>
                <p>
                  Applications for the EU Blue Card can be submitted at the German embassy or consulate in your home country.
                  In some cases, if you're already legally in Germany (e.g., on a job seeker visa), you can apply directly
                  at the local immigration office (Ausländerbehörde).
                </p>
              </div>
            </TabsContent>

            <TabsContent value="workpermit" className="mt-4">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">General Work Permit</h2>
                <p className="mb-4">
                  The general work permit (Aufenthaltserlaubnis zur Beschäftigung) is for foreign nationals who have a job
                  offer in Germany but don't qualify for the EU Blue Card. This permit requires approval from the Federal
                  Employment Agency (Bundesagentur für Arbeit).
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Eligibility Requirements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Job offer from a German employer</li>
                  <li>Qualifications required for the specific job</li>
                  <li>Proof that no suitable German or EU candidate is available (labor market test)</li>
                  <li>Comparable working conditions and salary to German employees</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Application Process</h3>
                <p className="mb-4">
                  When you apply for this permit, the immigration authority forwards your application to the Federal
                  Employment Agency for approval. The agency examines whether:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>No German or EU workers are available for the position</li>
                  <li>Your employment doesn't negatively affect the labor market</li>
                  <li>You're not being hired under worse conditions than comparable German workers</li>
                </ul>
                
                <p className="mt-4">
                  This process typically takes 2-3 months from application to approval.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="skilledworkers" className="mt-4">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">Skilled Workers Immigration Act</h2>
                <p className="mb-4">
                  The Skilled Workers Immigration Act (Fachkräfteeinwanderungsgesetz), which came into effect in March 2020,
                  has expanded opportunities for qualified professionals from non-EU countries to work in Germany.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Expanded definition of "skilled workers" to include both university graduates and those with vocational training</li>
                  <li>Removal of the priority check (Vorrangprüfung) for qualified professionals</li>
                  <li>Opportunity to come to Germany for up to 6 months to seek employment (Job Seeker Visa)</li>
                  <li>Simplified procedures for qualification recognition</li>
                  <li>Improved access to language courses and integration measures</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Recognition of Qualifications</h3>
                <p className="mb-4">
                  For this visa category, having your foreign qualifications recognized in Germany is particularly important.
                  You'll need to apply for recognition through the appropriate authority, depending on your profession.
                </p>
                <p>
                  The "Recognition in Germany" portal (www.anerkennung-in-deutschland.de) provides detailed information
                  about the recognition procedure for various professions.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="application" className="mt-4">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">Application Process</h2>
                <p className="mb-4">
                  The application process for a German work visa typically involves the following steps:
                </p>

                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <h3 className="text-lg font-semibold">Secure a job offer</h3>
                    <p>Find an employer in Germany willing to hire you and provide a formal job offer or employment contract.</p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold">Qualification recognition (if necessary)</h3>
                    <p>Apply for recognition of your foreign qualifications through the appropriate German authority.</p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold">Book a visa appointment</h3>
                    <p>Schedule an appointment at the German embassy or consulate in your country of residence.</p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold">Prepare application documents</h3>
                    <p>Gather all required documents (see "Required Documents" tab for details).</p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold">Submit your application</h3>
                    <p>Attend your appointment and submit your completed application with all supporting documents.</p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold">Approval process</h3>
                    <p>The embassy forwards your application to the immigration authority (Ausländerbehörde) in the German city where you'll be working.</p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold">Labor market check (if applicable)</h3>
                    <p>For some visa categories, the Federal Employment Agency conducts a labor market test.</p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold">Visa issuance</h3>
                    <p>If approved, you'll receive a visa valid for three months to enter Germany.</p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold">Residence permit</h3>
                    <p>After arriving in Germany, you must register at the local residents' registration office and apply for a residence permit at the immigration authority.</p>
                  </li>
                </ol>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <p className="text-blue-700">
                    <strong>Note:</strong> Processing times vary depending on your country of application, visa type, and current workload. Generally, you should expect 1-3 months from application to approval.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="documents" className="mt-4">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">Required Documents</h2>
                <p className="mb-4">
                  When applying for a German work visa, you typically need to submit the following documents:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>Completed visa application form</li>
                  <li>Valid passport (valid for at least 6 months beyond your intended stay)</li>
                  <li>Two recent biometric passport photos</li>
                  <li>Employment contract or binding job offer from a German employer</li>
                  <li>Curriculum vitae (CV)</li>
                  <li>Proof of qualifications (university degrees, vocational training certificates)</li>
                  <li>Proof of qualification recognition (if applicable)</li>
                  <li>Proof of German language skills (if required for your profession)</li>
                  <li>Proof of health insurance coverage valid in Germany</li>
                  <li>Visa fee payment (approximately €75-€110)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Additional Documents for EU Blue Card</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Proof of meeting the salary threshold (employment contract showing annual gross salary)</li>
                  <li>Proof of university degree (must be recognized in Germany or comparable to a German degree)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Additional Documents for Skilled Workers</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Decision on recognition of foreign qualifications</li>
                  <li>Proof of professional experience (if relevant)</li>
                </ul>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
                  <p className="text-yellow-700">
                    <strong>Important:</strong> All documents must be submitted in either German or English. If your documents are in another language, you must provide official translations by a certified translator.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Need Personalized Visa Assistance?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Our team can help you navigate the visa process and provide guidance tailored to your specific situation.
            </p>
            <div className="flex justify-center">
              <a 
                href="mailto:ugandajobsgermany@gmail.com" 
                className="bg-german-primary text-white px-6 py-3 rounded-md hover:bg-german-primary/90 transition-colors"
              >
                Request Assistance
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VisaInfoPage;
