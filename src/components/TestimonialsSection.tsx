
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, X } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mukasa David',
    position: 'Warehouse Worker',
    quote: 'I never thought I could find a job in Germany so easily! Uganda Jobs Germany helped me through the whole process, from visa application to securing a warehouse job. Now, I am earning a good salary and supporting my family back home. Thank you!',
  },
  {
    id: 2,
    name: 'Namutebi Sarah',
    position: 'Caregiver',
    quote: 'As a caregiver, I always wanted to work in Europe but didn\'t know how to start. This platform guided me, and within a few months, I got a job in a nursing home in Berlin. The pay is good, and I have a bright future ahead!',
  },
  {
    id: 3,
    name: 'Kasule James',
    position: 'Construction Worker',
    quote: 'I was struggling to find stable work in Uganda. Through Uganda Jobs Germany, I applied for a construction job in Hamburg. The process was smooth, and now I am working in Germany with great benefits. I highly recommend them!',
  },
  {
    id: 4,
    name: 'Nantongo Grace',
    position: 'Hotel Housekeeper',
    quote: 'I was skeptical at first, but Uganda Jobs Germany is real! They connected me to a hotel job in Munich, and now I am earning in Euros. It\'s a life-changing opportunity!',
  },
  {
    id: 5,
    name: 'Lubega Peter',
    position: 'Supermarket Assistant',
    quote: 'I only had basic education, but this platform helped me find a supermarket job in Germany. The working conditions are great, and I am able to save money for my future. I am so grateful!',
  },
  {
    id: 6,
    name: 'Nsubuga Ronald',
    position: 'Factory Worker',
    quote: 'Leaving Uganda for work in Germany was a big step for me, but Uganda Jobs Germany made the process easy. Now, I have a stable job in a factory, earning well and building my future. I encourage others to take this opportunity!',
  },
  {
    id: 7,
    name: 'Nakato Esther',
    position: 'Waitress',
    quote: 'I applied for a waitress job through Uganda Jobs Germany, and within a few months, I was in Germany working in a restaurant. The salary is good, and I am gaining great experience. I\'m so happy I took this chance!',
  },
  {
    id: 8,
    name: 'Ssekitoleko John',
    position: 'Delivery Driver',
    quote: 'I had been working as a boda boda rider in Uganda, but now I drive delivery vans in Germany. The pay is way better, and I can send money home to my family every month. This opportunity changed my life!',
  },
  {
    id: 9,
    name: 'Nabirye Joan',
    position: 'Cleaner',
    quote: 'At first, I thought it would be hard to find a job in Germany, but Uganda Jobs Germany helped me get a cleaning job in Frankfurt. The work is simple, and the pay is way better than I expected. I am saving for my future!',
  },
  {
    id: 10,
    name: 'Kato Brian',
    position: 'Supermarket Cashier',
    quote: 'I had no experience working in a foreign country, but with the help of Uganda Jobs Germany, I got a supermarket cashier job in Berlin. The working conditions are good, and I have met so many people from different cultures!',
  },
  {
    id: 11,
    name: 'Mugisha Kevin',
    position: 'Farm Worker',
    quote: 'I came to Germany for a seasonal farming job, and it was a great experience. The pay was good, and I learned a lot. I plan to return for another contract next year!',
  },
  {
    id: 12,
    name: 'Namwanje Diana',
    position: 'Childcare Assistant',
    quote: 'I love working with children, and Uganda Jobs Germany helped me get a job in a daycare center. The training was easy, and now I have a job that I truly enjoy. I am very thankful!',
  },
];

const TestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  
  // Show only the first 6 testimonials initially, and use responsive grid
  const displayedTestimonials = testimonials.slice(0, 6);
  
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-3">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-german-dark mb-2">Success Stories</h2>
          <div className="w-12 h-0.5 bg-german-primary mx-auto mb-2 rounded-full"></div>
          <p className="text-german-muted max-w-xl mx-auto text-sm">
            Hear from Ugandans who found their dream jobs in Germany
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {displayedTestimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="relative border-none rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 overflow-hidden animate-fade-in cursor-pointer"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
              onClick={() => setSelectedTestimonial(testimonial)}
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
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonial Popup Dialog */}
      <Dialog open={selectedTestimonial !== null} onOpenChange={(open) => !open && setSelectedTestimonial(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarFallback className="bg-gradient-to-br from-german-primary to-german-primary/80 text-white">
                  {selectedTestimonial?.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              {selectedTestimonial?.name}
            </DialogTitle>
            <DialogDescription className="text-sm">
              {selectedTestimonial?.position}
            </DialogDescription>
          </DialogHeader>
          <div className="p-6 bg-gray-50 rounded-md my-4">
            <Quote className="h-5 w-5 text-german-primary float-left mr-2 mt-1" />
            <p className="text-german-dark italic">
              {selectedTestimonial?.quote}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TestimonialsSection;
