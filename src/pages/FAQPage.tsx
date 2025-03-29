
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is UgandajobsGermany?",
      answer: "UgandajobsGermany is a specialized job platform that connects Ugandan and other international professionals with employment opportunities across Germany. We provide resources, guidance, and support throughout the entire job search and relocation process."
    },
    {
      question: "Do I need to know German to work in Germany?",
      answer: "While many international companies in Germany operate in English, knowing German can significantly improve your job prospects and daily life. Some roles, especially in customer-facing positions or certain regulated professions, may require German language skills. We recommend learning basic German even if your job doesn't require it, as it will make integration much easier."
    },
    {
      question: "What visa do I need to work in Germany?",
      answer: "The type of visa you need depends on your nationality, qualifications, and job offer. Common work visas include the EU Blue Card (for highly qualified professionals), the general employment visa, and visas for specific occupations. Visit our Visa Information page for more detailed information based on your situation."
    },
    {
      question: "How do I get my qualifications recognized in Germany?",
      answer: "Germany has a formal process for the recognition of foreign qualifications. The procedure varies depending on your profession and the state (Bundesland) where you plan to work. For regulated professions (medical, legal, teaching), recognition is mandatory. For other professions, it's recommended but not always required. Check our Qualification Recognition resource for specific guidance."
    },
    {
      question: "How long does the visa process take?",
      answer: "Processing times vary depending on the type of visa, your country of application, and the current workload of German authorities. Generally, you should expect 1-3 months from application to approval. We recommend starting the process as early as possible once you have a job offer."
    },
    {
      question: "How can I find housing in Germany?",
      answer: "Finding accommodation in German cities can be challenging, especially in popular areas like Munich, Hamburg, and Berlin. Start by looking at online portals like ImmobilienScout24, WG-Gesucht (for shared housing), or Immowelt. Many employers also assist with temporary accommodation when you first arrive. See our Housing Guide for more detailed information."
    },
    {
      question: "What salary can I expect in Germany?",
      answer: "Salaries in Germany vary widely depending on your profession, experience, qualifications, location, and company size. As a reference point, the average gross salary in Germany is around €49,200 per year (2023 data). For specific professions, our job listings provide salary ranges that give you an idea of market rates."
    },
    {
      question: "How much does it cost to relocate to Germany?",
      answer: "Initial relocation costs typically include visa fees (€75-€110), travel expenses, first month's rent plus security deposit (usually 2-3 months' rent), health insurance until you start your job, and living expenses until your first paycheck. We recommend having at least €3,000-€5,000 in savings for a smooth transition."
    },
    {
      question: "Is healthcare free in Germany?",
      answer: "Germany has a statutory health insurance system that provides comprehensive coverage. While not entirely free, the costs are shared between employers and employees through monthly contributions (approximately 14-15% of your gross salary, split equally). Once insured, most medical services require minimal or no additional payment."
    },
    {
      question: "Can I bring my family with me to Germany?",
      answer: "Yes, most work visas allow for family reunification. Your spouse and minor children can apply for dependent visas. Your spouse will also generally receive work authorization. Different rules may apply depending on your specific visa type and circumstances."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-german-primary text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Find answers to the most common questions about working and living in Germany
            </p>
          </div>
        </div>

        <div className="container mx-auto py-12">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-german-muted">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Our team is here to help you with any questions about working and living in Germany.
            </p>
            <div className="flex justify-center">
              <a 
                href="mailto:ugandajobsgermany@gmail.com" 
                className="bg-german-primary text-white px-6 py-3 rounded-md hover:bg-german-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
