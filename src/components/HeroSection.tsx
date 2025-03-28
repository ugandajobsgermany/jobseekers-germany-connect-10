
import React from 'react';
import SearchBar from './SearchBar';
import { MapPin } from 'lucide-react';

const popularCities = [
  'Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne', 'Stuttgart'
];

const HeroSection = () => {
  return (
    <section className="relative bg-german-primary py-20 md:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-opacity-70 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M.5.5h23v23H.5z%22%20stroke%3D%22%23fff%22%20stroke-opacity%3D%22.05%22%2F%3E%3C%2Fsvg%3E')]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Dream Job in Germany
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Connect with top employers and discover career opportunities across Germany
          </p>
          
          <SearchBar />
          
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-white/80">
            <span className="text-sm">Popular cities:</span>
            {popularCities.map((city) => (
              <a 
                key={city} 
                href={`/jobs?location=${city.toLowerCase()}`}
                className="text-sm flex items-center hover:text-white hover:underline ml-2"
              >
                <MapPin className="h-3 w-3 mr-1" />
                {city}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
