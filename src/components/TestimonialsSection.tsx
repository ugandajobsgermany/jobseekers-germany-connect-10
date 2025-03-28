
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Software Engineer',
    company: 'SAP',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    quote: 'Finding a tech job in Germany as an expat was challenging until I found JobseekerGermany. Their platform helped me find the perfect role at SAP and provided guidance through the visa process.',
  },
  {
    id: 2,
    name: 'Miguel Rodriguez',
    position: 'Finance Analyst',
    company: 'Deutsche Bank',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    quote: 'The job filtering system made it easy to find finance positions that matched my experience. Within two months, I landed a great role at Deutsche Bank. The relocation resources were invaluable.',
  },
  {
    id: 3,
    name: 'Akiko Tanaka',
    position: 'UX Designer',
    company: 'Zalando',
    image: 'https://randomuser.me/api/portraits/women/64.jpg',
    quote: 'JobseekerGermany stands out because they understand the needs of international professionals. Their resources for learning German while job hunting helped me immensely in securing my dream design role.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-german-dark mb-4">Success Stories</h2>
          <p className="text-german-muted max-w-2xl mx-auto">
            Hear from professionals who found their ideal careers in Germany through our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-md h-full">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-german-primary mb-4 opacity-30" />
                <p className="text-german-dark mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold text-german-dark">{testimonial.name}</h4>
                    <p className="text-sm text-german-muted">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
