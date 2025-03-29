
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Software Engineer',
    company: 'SAP',
    quote: 'Finding a tech job in Germany as an expat was challenging until I found UgandajobsGermany. Their platform helped me find the perfect role at SAP and provided guidance through the visa process.',
  },
  {
    id: 2,
    name: 'Miguel Rodriguez',
    position: 'Finance Analyst',
    company: 'Deutsche Bank',
    quote: 'The job filtering system made it easy to find finance positions that matched my experience. Within two months, I landed a great role at Deutsche Bank. The relocation resources were invaluable.',
  },
  {
    id: 3,
    name: 'Akiko Tanaka',
    position: 'UX Designer',
    company: 'Zalando',
    quote: 'UgandajobsGermany stands out because they understand the needs of international professionals. Their resources for learning German while job hunting helped me immensely in securing my dream design role.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-german-dark mb-4">Success Stories</h2>
          <div className="w-16 h-1 bg-german-primary mx-auto mb-4 rounded-full"></div>
          <p className="text-german-muted max-w-2xl mx-auto text-base">
            Hear from professionals who found their ideal careers in Germany through our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="relative border-none rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-german-primary to-german-secondary"></div>
              <CardContent className="p-4 flex flex-col h-full">
                <div className="mb-4">
                  <div className="bg-gradient-to-br from-german-primary/20 to-german-primary/5 w-10 h-10 flex items-center justify-center rounded-full mb-3">
                    <Quote className="h-5 w-5 text-german-primary" />
                  </div>
                  <p className="text-german-dark text-sm italic leading-relaxed line-clamp-4">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center mt-auto pt-3 border-t border-gray-100">
                  <Avatar className="h-10 w-10 mr-3 border border-german-primary/20">
                    <AvatarFallback className="bg-gradient-to-br from-german-primary to-german-primary/80 text-white text-xs">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-german-dark text-sm">{testimonial.name}</h4>
                    <p className="text-german-muted text-xs">
                      {testimonial.position} at <span className="font-medium text-german-primary">{testimonial.company}</span>
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
