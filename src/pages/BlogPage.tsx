
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogCategories = [
  { id: 'all', name: 'All Posts' },
  { id: 'career', name: 'Career Advice' },
  { id: 'visa', name: 'Visa & Immigration' },
  { id: 'culture', name: 'German Culture' },
  { id: 'language', name: 'Language Tips' },
  { id: 'lifestyle', name: 'Lifestyle' },
];

const blogPosts = [
  {
    id: 1,
    title: "Understanding the EU Blue Card Requirements in 2023",
    excerpt: "The EU Blue Card is one of the most sought-after work permits for highly skilled professionals moving to Germany. This article breaks down the latest requirements, salary thresholds, and application process.",
    date: "June 15, 2023",
    author: "Maria Schmidt",
    category: "visa",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1512075135822-67cdd9dd7314?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "How to Create a German-Style CV That Gets Noticed",
    excerpt: "German CVs follow specific formatting and content standards that might differ from what you're used to. Learn how to adapt your resume to increase your chances of landing interviews with German employers.",
    date: "May 23, 2023",
    author: "Thomas Weber",
    category: "career",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "10 German Phrases Every Professional Should Know",
    excerpt: "Even if your job doesn't require fluent German, knowing these key professional phrases can help you navigate workplace situations and make a great impression on your German colleagues.",
    date: "April 10, 2023",
    author: "Anna Müller",
    category: "language",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555431189-0fabf2667795?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Navigating German Work Culture: Unwritten Rules",
    excerpt: "German workplace culture has its own set of unspoken expectations that can be confusing for international professionals. This guide helps you understand these cultural nuances to integrate more smoothly.",
    date: "March 28, 2023",
    author: "David Schneider",
    category: "culture",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Finding Affordable Housing in Berlin: A Comprehensive Guide",
    excerpt: "Berlin's housing market is notoriously competitive. This article provides practical tips, resources, and strategies to help you find an affordable apartment in Germany's capital city.",
    date: "February 15, 2023",
    author: "Sophie Wagner",
    category: "lifestyle",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "The German Pension System Explained for Foreigners",
    excerpt: "Understanding how the German pension system works is crucial for planning your long-term financial future in the country. This guide breaks down the complicated system into digestible information.",
    date: "January 30, 2023",
    author: "Klaus Fischer",
    category: "lifestyle",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Interview Success: How to Impress German Employers",
    excerpt: "German job interviews often differ from those in other countries. Learn about common questions, cultural expectations, and how to present yourself professionally to German hiring managers.",
    date: "December 12, 2022",
    author: "Julia Hoffmann",
    category: "career",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Self-Employment in Germany: A Guide for Freelancers",
    excerpt: "Considering working as a freelancer in Germany? This comprehensive guide covers visa requirements, registration process, taxes, health insurance, and other essential information for self-employed professionals.",
    date: "November 5, 2022",
    author: "Martin Bauer",
    category: "visa",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1617529497471-9218633199c0?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "German Language Apps: Which One is Right for You?",
    excerpt: "With so many language learning apps available, it can be hard to choose the right one for your needs. This comparative review evaluates the most popular German language apps based on various learning styles.",
    date: "October 18, 2022",
    author: "Nina Schulz",
    category: "language",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1612787662393-5be6cd4c8fb3?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Work-Life Balance: How Germans Do It Right",
    excerpt: "Germany is known for its healthy approach to work-life balance. Discover the cultural attitudes, legal protections, and practices that contribute to this balance and how you can incorporate them into your life.",
    date: "September 22, 2022",
    author: "Laura Zimmermann",
    category: "culture",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd064a?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Recognition of Foreign Qualifications in Germany",
    excerpt: "Having your foreign qualifications recognized is often essential for working in Germany, especially in regulated professions. Learn about the process, requirements, and resources available to help you.",
    date: "August 9, 2022",
    author: "Robert Meyer",
    category: "career",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "German Health Insurance System: Public vs. Private",
    excerpt: "Choosing between public and private health insurance is one of the most important decisions you'll make when moving to Germany. This comparison helps you understand the pros and cons of each option.",
    date: "July 15, 2022",
    author: "Christina Koch",
    category: "lifestyle",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?q=80&w=600&auto=format&fit=crop"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-german-primary text-white py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">Career Blog</h1>
            <p className="text-xl max-w-3xl">
              Expert advice and insights to help you succeed in your German career journey
            </p>
          </div>
        </div>

        <section className="container mx-auto py-12">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-start mb-8">
              {blogCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-base px-4 py-2">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {blogCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts
                    .filter(post => category.id === 'all' || post.category === category.id)
                    .map((post) => (
                      <Card key={post.id} className="overflow-hidden h-full">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center text-sm text-german-muted mb-2">
                            <div className="flex items-center mr-4">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              <span>{post.author}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                          <p className="text-german-muted mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                              <Tag className="h-4 w-4 mr-1 text-german-primary" />
                              <span className="text-sm text-german-muted capitalize">{post.category}</span>
                            </div>
                            <span className="text-sm text-german-muted">{post.readTime}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 rounded-full bg-german-primary text-white flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 rounded-full text-german-dark flex items-center justify-center">
                2
              </button>
              <button className="w-10 h-10 rounded-full text-german-dark flex items-center justify-center">
                3
              </button>
              <span className="text-german-muted mx-2">...</span>
              <button className="w-10 h-10 rounded-full text-german-dark flex items-center justify-center">
                8
              </button>
              <button className="px-4 py-2 rounded-md border border-gray-300 text-german-dark flex items-center justify-center">
                Next
              </button>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="container mx-auto">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-german-muted mb-6">
                Get the latest career advice, job opportunities, and resources delivered directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-german-primary"
                />
                <button 
                  type="submit" 
                  className="bg-german-primary text-white px-6 py-3 rounded-md hover:bg-german-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-german-muted mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
