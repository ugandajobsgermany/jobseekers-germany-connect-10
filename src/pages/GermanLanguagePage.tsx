import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Globe, Laptop, MessageCircle, CheckCircle } from 'lucide-react';

const languageLevels = [
  {
    level: 'A1',
    name: 'Beginner',
    description: 'Can understand and use familiar everyday expressions and very basic phrases.',
    timeRequired: '80-100 hours',
    examples: ['Introducing yourself', 'Ordering food', 'Basic greetings']
  },
  {
    level: 'A2',
    name: 'Elementary',
    description: 'Can communicate in simple and routine tasks requiring a simple and direct exchange of information.',
    timeRequired: '180-200 hours',
    examples: ['Shopping conversations', 'Talking about hobbies', 'Simple work discussions']
  },
  {
    level: 'B1',
    name: 'Intermediate',
    description: 'Can deal with most situations likely to arise while traveling in German-speaking areas.',
    timeRequired: '350-400 hours',
    examples: ['Job interviews', 'Discussing current events', 'Expressing opinions']
  },
  {
    level: 'B2',
    name: 'Upper Intermediate',
    description: 'Can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers possible.',
    timeRequired: '500-600 hours',
    examples: ['University studies', 'Complex work discussions', 'Following news media']
  },
  {
    level: 'C1',
    name: 'Advanced',
    description: 'Can express ideas fluently and spontaneously without much obvious searching for expressions.',
    timeRequired: '700-800 hours',
    examples: ['Professional work environment', 'Academic research', 'Complex negotiations']
  },
  {
    level: 'C2',
    name: 'Proficiency',
    description: 'Can understand with ease virtually everything heard or read and express themselves spontaneously.',
    timeRequired: '1000-1200 hours',
    examples: ['Native-like fluency', 'Literary comprehension', 'Nuanced cultural understanding']
  }
];

const languageCourses = [
  {
    name: 'Goethe-Institut',
    description: 'Official German cultural institute offering high-quality language courses at all levels.',
    website: 'https://www.goethe.de/en/index.html',
    features: ['Internationally recognized certificates', 'Cultural integration', 'Professional teachers'],
    icon: GraduationCap,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    name: 'Volkshochschule (VHS)',
    description: 'Adult education centers offering affordable German courses in most German cities.',
    website: 'https://www.volkshochschule.de/',
    features: ['Budget-friendly options', 'Locations throughout Germany', 'Integration courses'],
    icon: BookOpen,
    color: 'bg-green-100 text-green-700'
  },
  {
    name: 'Deutsche Welle',
    description: 'Free online German courses from Germany\'s international broadcaster.',
    website: 'https://learngerman.dw.com/',
    features: ['Free resources', 'Interactive exercises', 'Cultural context'],
    icon: Globe,
    color: 'bg-purple-100 text-purple-700'
  },
  {
    name: 'Duolingo',
    description: 'Popular language learning app with gamified German lessons.',
    website: 'https://www.duolingo.com/',
    features: ['Gamified learning', 'Mobile-friendly', 'Daily practice reminders'],
    icon: Laptop,
    color: 'bg-green-100 text-green-700'
  },
  {
    name: 'Babbel',
    description: 'Subscription-based language learning platform focused on practical conversation.',
    website: 'https://www.babbel.com/',
    features: ['Conversation-focused', 'Speech recognition', 'Real-life scenarios'],
    icon: MessageCircle,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    name: 'Integration Courses',
    description: 'Government-sponsored courses for immigrants combining language with cultural integration.',
    website: 'https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/integrationskurse-node.html',
    features: ['Subsidized by government', 'Cultural orientation', 'Path to citizenship requirements'],
    icon: CheckCircle,
    color: 'bg-red-100 text-red-700'
  }
];

const languageExams = [
  {
    name: 'Goethe-Zertifikat',
    levels: 'A1 to C2',
    recognition: 'Internationally recognized, accepted for visa applications and university admission',
    preparation: 'Courses at Goethe-Institut, practice exams available online'
  },
  {
    name: 'TestDaF',
    levels: 'B2 to C1',
    recognition: 'Required for university admission in Germany',
    preparation: 'TestDaF preparation courses, online practice materials'
  },
  {
    name: 'telc Deutsch',
    levels: 'A1 to C2',
    recognition: 'Recognized for visa applications, work permits, and citizenship',
    preparation: 'Preparation courses at language schools, practice tests'
  },
  {
    name: 'DSH',
    levels: 'B2 to C2',
    recognition: 'University entrance exam for international students',
    preparation: 'Preparatory courses at universities, practice materials'
  }
];

const GermanLanguagePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="German Language Resources for Ugandans"
        description="Resources to help Ugandans learn German language for work and integration. Find courses, self-study materials, language exams information, and practice tips."
        keywords="German language courses, learn German Uganda, language integration Germany, German proficiency test, Goethe Institut, language apps"
        canonical="https://ugandajobsgermany.online/german-language"
        ogType="article"
      />
      <Header />
      <main className="flex-grow">
        <div className="bg-german-primary text-white py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">German Language Resources</h1>
            <p className="text-xl max-w-3xl">
              Everything you need to know about learning German for work, integration, and daily life in Germany
            </p>
          </div>
        </div>

        <section className="container mx-auto py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Learn German?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Career Advancement</h3>
                <p className="text-german-muted">
                  While many international companies use English, knowing German significantly expands your job opportunities and can lead to faster career progression in Germany.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Integration</h3>
                <p className="text-german-muted">
                  Speaking German helps you connect with locals, understand the culture, and feel more at home in your new country.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Legal Requirements</h3>
                <p className="text-german-muted">
                  Basic German skills are required for permanent residency, and higher levels are needed for citizenship. Some visa types also have language requirements.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-center">German Language Levels</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {languageLevels.map((level) => (
              <Card key={level.level} className="h-full">
                <CardContent className="p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-german-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-3">
                      {level.level}
                    </div>
                    <h3 className="text-xl font-semibold">{level.name}</h3>
                  </div>
                  <p className="text-german-muted mb-4">{level.description}</p>
                  <div className="mb-3">
                    <span className="font-medium">Time required:</span> {level.timeRequired}
                  </div>
                  <div>
                    <span className="font-medium">Example uses:</span>
                    <ul className="list-disc pl-5 mt-1">
                      {level.examples.map((example, index) => (
                        <li key={index} className="text-german-muted">{example}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Language Learning Options</h2>
            
            <Tabs defaultValue="courses" className="w-full">
              <TabsList className="flex justify-center mb-8">
                <TabsTrigger value="courses" className="text-base px-4 py-2">
                  Language Courses
                </TabsTrigger>
                <TabsTrigger value="apps" className="text-base px-4 py-2">
                  Self-Study Resources
                </TabsTrigger>
                <TabsTrigger value="exams" className="text-base px-4 py-2">
                  Language Exams
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="courses">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {languageCourses.map((course, index) => (
                    <Card key={index} className="h-full">
                      <CardContent className="p-6 h-full">
                        <div className={`p-3 rounded-full ${course.color} w-fit mb-4`}>
                          <course.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                        <p className="text-german-muted mb-4">{course.description}</p>
                        <ul className="mb-4">
                          {course.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center mb-1">
                              <CheckCircle className="h-4 w-4 text-german-primary mr-2" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a 
                          href={course.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-german-primary hover:underline text-sm font-medium"
                        >
                          Visit Website →
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="apps">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-6">Self-Study Resources</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Online Platforms</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Duolingo</strong> - Free gamified learning with short daily lessons</li>
                        <li><strong>Babbel</strong> - Subscription-based platform focused on practical conversation</li>
                        <li><strong>Memrise</strong> - Uses memory techniques and spaced repetition</li>
                        <li><strong>Deutsche Welle</strong> - Free courses with cultural context</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-2">YouTube Channels</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Easy German</strong> - Street interviews with subtitles</li>
                        <li><strong>Deutsch für Euch</strong> - Grammar explanations and vocabulary</li>
                        <li><strong>Get Germanized</strong> - Language and culture videos</li>
                        <li><strong>Lingoni German</strong> - Structured lessons by level</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Books and Workbooks</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Menschen</strong> - Popular textbook series with workbooks</li>
                        <li><strong>Netzwerk</strong> - Modern approach with online components</li>
                        <li><strong>Grammatik aktiv</strong> - Grammar practice books by level</li>
                        <li><strong>Langenscheidt dictionaries</strong> - Standard German dictionaries</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Practice Tips</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Set aside 20-30 minutes daily for consistent practice</li>
                        <li>Find a language exchange partner (tandem) for conversation practice</li>
                        <li>Watch German TV shows with subtitles (Netflix, ARD Mediathek, ZDF)</li>
                        <li>Listen to German podcasts for beginners (Coffee Break German, Slow German)</li>
                        <li>Change your phone language to German for daily exposure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="exams">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-6">German Language Certificates</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-3 px-4 text-left">Exam</th>
                          <th className="py-3 px-4 text-left">Levels</th>
                          <th className="py-3 px-4 text-left">Recognition</th>
                          <th className="py-3 px-4 text-left">Preparation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {languageExams.map((exam, index) => (
                          <tr key={index} className="border-t">
                            <td className="py-3 px-4 font-medium">{exam.name}</td>
                            <td className="py-3 px-4">{exam.levels}</td>
                            <td className="py-3 px-4">{exam.recognition}</td>
                            <td className="py-3 px-4">{exam.preparation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold mb-3">Which Certificate Do You Need?</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>For work visa:</strong> Usually A1-B1 depending on the job and visa type</li>
                      <li><strong>For university:</strong> TestDaF or DSH (usually C1 level)</li>
                      <li><strong>For permanent residency:</strong> B1 certificate</li>
                      <li><strong>For citizenship:</strong> B2 certificate</li>
                      <li><strong>For medical professionals:</strong> B2-C1 with professional language exam</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="container mx-auto py-12">
          <div className="bg-german-primary text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning German?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              We've partnered with language schools in both Uganda and Germany to offer special rates for our users.
            </p>
            <Button className="bg-white text-german-primary hover:bg-gray-100">
              Explore Language Partners
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GermanLanguagePage;
