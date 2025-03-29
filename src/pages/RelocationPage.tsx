
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Calendar, Home, CreditCard, Globe, FileText, Phone, ShieldCheck, Mailbox } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Before You Move",
    items: [
      "Secure your job offer and work contract",
      "Apply for and receive your work visa",
      "Obtain health insurance coverage",
      "Research housing options and neighborhoods",
      "Set up a German bank account (can often be done remotely)",
      "Schedule German language courses if needed",
      "Gather important documents and get translations if necessary",
      "Research the cost of living in your destination city"
    ],
    icon: Calendar
  },
  {
    id: 2,
    title: "First Week in Germany",
    items: [
      "Register your residence (Anmeldung) at the local registration office",
      "Set up a German mobile phone number",
      "Open a local bank account (if not done remotely)",
      "Find temporary accommodation if needed",
      "Learn how public transportation works in your city",
      "Register with the local immigration office (Ausländerbehörde)",
      "Explore your neighborhood and locate essential services",
      "Connect with expat communities for support"
    ],
    icon: Clock
  },
  {
    id: 3,
    title: "First Month",
    items: [
      "Secure permanent housing",
      "Set up utilities (electricity, water, internet)",
      "Apply for the electronic residence permit (eAT)",
      "Register for health insurance with your employer",
      "Start language courses",
      "Set up direct debits (SEPA) for recurring payments",
      "Apply for a tax identification number (Steuer-ID)",
      "Get familiar with your workplace environment and culture"
    ],
    icon: Home
  },
  {
    id: 4,
    title: "Within Three Months",
    items: [
      "Register for a pension insurance number",
      "Apply for child benefits if applicable (Kindergeld)",
      "Convert your foreign driver's license if needed",
      "Join professional networks in your field",
      "Set up a retirement savings plan",
      "Get oriented with healthcare providers in your area",
      "Consider additional insurance options (liability, household)",
      "Understand the German tax system and your obligations"
    ],
    icon: FileText
  },
];

const essentials = [
  {
    title: "Banking",
    content: "Traditional banks like Deutsche Bank and Commerzbank offer comprehensive services but have monthly fees. Online banks like N26 and DKB provide free accounts with good English support. You'll need your passport, residence registration, and work permit to open an account.",
    icon: CreditCard,
    color: "bg-blue-100 text-blue-700"
  },
  {
    title: "Housing",
    content: "The housing market in major German cities is competitive. Start your search on websites like Immobilienscout24, WG-Gesucht, and Immowelt. Be prepared for upfront costs: deposit (usually 2-3 months' rent), first month's rent, and sometimes agent fees. Always get a written contract.",
    icon: Home,
    color: "bg-green-100 text-green-700"
  },
  {
    title: "Health Insurance",
    content: "Health insurance is mandatory in Germany. Most employed people join the statutory system (gesetzliche Krankenversicherung), with contributions split between employer and employee. High earners can opt for private insurance (private Krankenversicherance) with more comprehensive coverage.",
    icon: ShieldCheck,
    color: "bg-red-100 text-red-700"
  },
  {
    title: "Communications",
    content: "Major mobile providers include Deutsche Telekom, Vodafone, and O2. For cheaper options, consider prepaid SIMs from Aldi Talk, Lidl Connect, or other discount providers. For internet at home, compare offers on comparison websites like Check24.",
    icon: Phone,
    color: "bg-purple-100 text-purple-700"
  },
  {
    title: "Language Resources",
    content: "The Goethe-Institut offers quality German courses both online and in person. Volkshochschulen (adult education centers) provide affordable language classes. Apps like Duolingo and Babbel are good supplements to formal learning. Consider integration courses which combine language with cultural education.",
    icon: Globe,
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    title: "Postal Services",
    content: "Deutsche Post handles mail services throughout Germany. DHL (owned by Deutsche Post) is widely used for package delivery. When you move, set up mail forwarding (Nachsendeauftrag) with Deutsche Post to ensure you receive important correspondence.",
    icon: Mailbox,
    color: "bg-indigo-100 text-indigo-700"
  }
];

const RelocationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-german-primary text-white py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">Relocation Guide</h1>
            <p className="text-xl max-w-3xl">
              Your comprehensive step-by-step guide to successfully relocating to Germany
            </p>
          </div>
        </div>

        <section className="container mx-auto py-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Relocation Timeline</h2>
            <p className="text-lg text-german-muted max-w-4xl mx-auto mb-8 text-center">
              Follow this timeline to ensure a smooth transition to your new life in Germany
            </p>

            <div className="space-y-6">
              {steps.map((step) => (
                <Card key={step.id} className="border-l-4 border-german-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-german-primary text-white p-3 rounded-full mr-4">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-german-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Relocation Essentials</h2>
            <p className="text-lg text-german-muted max-w-4xl mx-auto mb-8 text-center">
              Key information for setting up your life in Germany
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {essentials.map((item, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6 h-full">
                    <div className={`p-3 rounded-full ${item.color} w-fit mb-4`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-german-muted">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto py-12">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Cultural Tips for Newcomers</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Punctuality</h3>
                <p className="text-german-muted">
                  Germans value punctuality highly. Being on time for appointments, work, and social gatherings is expected. 
                  If you're going to be late, it's courteous to call ahead and let the other person know.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Formality and Titles</h3>
                <p className="text-german-muted">
                  Germans tend to be more formal in business and official settings. Use "Herr" (Mr.) or "Frau" (Ms./Mrs.) 
                  followed by the last name when addressing people. Wait to be invited before using first names or the informal "du" form.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Recycling and Environment</h3>
                <p className="text-german-muted">
                  Germany has a complex recycling system (Mülltrennung). Waste is separated into different categories: paper, 
                  packaging, organic waste, glass, and residual waste. Take time to learn the local recycling rules to avoid issues with neighbors.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Quiet Hours</h3>
                <p className="text-german-muted">
                  Most residential areas observe quiet hours (Ruhezeiten), typically between 1:00 PM and 3:00 PM and from 10:00 PM to 7:00 AM on weekdays. 
                  Sundays are generally considered rest days with stricter quiet hours all day.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Direct Communication</h3>
                <p className="text-german-muted">
                  Germans tend to communicate directly and may seem blunt to those from cultures with more indirect communication styles. 
                  This directness is not meant to be rude but is valued for clarity and efficiency.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Work-Life Separation</h3>
                <p className="text-german-muted">
                  There's often a clear separation between work and personal life in German culture. Colleagues may maintain more formal relationships 
                  at work, and business discussions are typically confined to working hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-german-primary text-white py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need More Help with Your Relocation?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Our team offers personalized relocation assistance to make your move to Germany as smooth as possible.
            </p>
            <a 
              href="mailto:ugandajobsgermany@gmail.com" 
              className="bg-white text-german-primary px-8 py-3 rounded-md inline-block hover:bg-gray-100 transition-colors font-medium"
            >
              Contact Our Relocation Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RelocationPage;
