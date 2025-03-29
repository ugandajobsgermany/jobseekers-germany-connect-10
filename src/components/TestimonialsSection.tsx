
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
    <section className="bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-3">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-german-dark mb-2">Success Stories</h2>
          <div className="w-12 h-0.5 bg-german-primary mx-auto mb-2 rounded-full"></div>
          <p className="text-german-muted max-w-xl mx-auto text-sm">
            Hear from professionals who found their ideal careers in Germany
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-3 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="relative border-none rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 overflow-hidden animate-fade-in"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-german-primary to-german-secondary"></div>
              <CardContent className="p-3 flex flex-col h-full">
                <div className="mb-2">
                  <div className="bg-gradient-to-br from-german-primary/10 to-german-primary/5 w-6 h-6 flex items-center justify-center rounded-full mb-2">
                    <Quote className="h-3 w-3 text-german-primary" />
                  </div>
                  <p className="text-german-dark text-xs italic leading-relaxed line-clamp-3">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center mt-auto pt-2 border-t border-gray-100">
                  <Avatar className="h-6 w-6 mr-2 border border-german-primary/20">
                    <AvatarFallback className="bg-gradient-to-br from-german-primary to-german-primary/80 text-white text-[10px]">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-german-dark text-xs">{testimonial.name}</h4>
                    <p className="text-german-muted text-[10px]">
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
