
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, BookOpen, Globe, Monitor, MessageSquare, Headphones, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const courses = [
  {
    name: "Goethe-Institut",
    description: "The official German cultural institute offers high-quality language courses both online and at their centers worldwide.",
    website: "https://www.goethe.de/",
    levels: "A1-C2",
    pricing: "€300-€1000 per course",
    features: ["Official certificates recognized worldwide", "Qualified native teachers", "Cultural immersion", "Comprehensive curriculum"]
  },
  {
    name: "Volkshochschule (VHS)",
    description: "Community adult education centers providing affordable German courses in almost every German city.",
    website: "https://www.volkshochschule.de/",
    levels: "A1-C2",
    pricing: "€100-€400 per course",
    features: ["Budget-friendly options", "Local community integration", "Flexible schedules", "Good for long-term residents"]
  },
  {
    name: "Deutsche Welle",
    description: "Germany's international broadcaster offers free online German courses with multimedia learning materials.",
    website: "https://learngerman.dw.com/",
    levels: "A1-C1",
    pricing: "Free",
    features: ["Self-paced learning", "Interactive exercises", "Current events content", "Cultural insights"]
  },
  {
    name: "Berlitz",
    description: "International language school with intensive German courses, private lessons, and business German.",
    website: "https://www.berlitz.com/",
    levels: "A1-C2",
    pricing: "€500-€2000+ per course",
    features: ["Immersive method", "Business German focus available", "Private tutoring options", "Flexible scheduling"]
  },
  {
    name: "Integration Courses",
    description: "Government-subsidized courses for immigrants, combining language learning with cultural orientation.",
    website: "https://www.bamf.de/",
    levels: "A1-B1",
    pricing: "€1,365 (partially refundable upon successful completion)",
    features: ["Subsidized by the government", "Cultural integration content", "Required for some residence permits", "Standardized curriculum"]
  }
];

const apps = [
  {
    name: "Duolingo",
    description: "Gamified language learning platform with bite-sized lessons and progression system.",
    pricing: "Free with premium option (€7-10/month)",
    bestFor: "Beginners, casual learners",
    features: ["Gamified experience", "Daily practice reminders", "Quick, mobile learning", "Good for basic vocabulary"]
  },
  {
    name: "Babbel",
    description: "Structured courses focused on practical conversation skills with speech recognition.",
    pricing: "€5-10/month (subscription)",
    bestFor: "Beginner to intermediate learners",
    features: ["Conversational focus", "Speech recognition", "Cultural notes", "Practical dialogue scenarios"]
  },
  {
    name: "Memrise",
    description: "Vocabulary-focused app using spaced repetition and video clips of native speakers.",
    pricing: "Free with premium option (€8-10/month)",
    bestFor: "Vocabulary building, pronunciation practice",
    features: ["Videos of native speakers", "Spaced repetition system", "User-created content", "Contextual learning"]
  },
  {
    name: "Anki",
    description: "Customizable flashcard system based on spaced repetition for effective memorization.",
    pricing: "Free (desktop), €25 (iOS app)",
    bestFor: "Serious language students, vocabulary memorization",
    features: ["Highly customizable", "Powerful spaced repetition", "Import/create custom decks", "Statistics tracking"]
  },
  {
    name: "Lingvist",
    description: "AI-powered language learning tool that adapts to your knowledge level and learning pace.",
    pricing: "Free trial, then €10-15/month",
    bestFor: "Intermediate learners wanting to expand vocabulary quickly",
    features: ["Adaptive learning algorithm", "Focus on useful vocabulary", "Grammar explanations", "Natural context examples"]
  }
];

const languageLevels = [
  {
    level: "A1 - Beginner",
    description: "Basic knowledge of the language. Can understand and use familiar everyday expressions and very basic phrases.",
    canDo: [
      "Introduce yourself and others",
      "Ask and answer simple personal questions",
      "Interact in a simple way if the other person speaks slowly",
      "Fill out simple forms with personal details",
      "Understand basic instructions and directions"
    ]
  },
  {
    level: "A2 - Elementary",
    description: "Can understand sentences and frequently used expressions related to areas of most immediate relevance.",
    canDo: [
      "Describe your background, immediate environment and matters of immediate need",
      "Communicate in simple and routine tasks",
      "Handle very short social exchanges",
      "Understand simple job advertisements",
      "Write short, simple notes and messages"
    ]
  },
  {
    level: "B1 - Intermediate",
    description: "Can deal with most situations likely to arise while traveling in a German-speaking area.",
    canDo: [
      "Describe experiences, events, dreams, and ambitions",
      "Give reasons and explanations for opinions and plans",
      "Understand the main points of clear standard speech",
      "Write simple connected text on familiar topics",
      "Handle most situations at work, school, or leisure"
    ]
  },
  {
    level: "B2 - Upper Intermediate",
    description: "Can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers possible.",
    canDo: [
      "Understand complex text on both concrete and abstract topics",
      "Engage in detailed discussions in your field of specialization",
      "Present clear, detailed descriptions on a wide range of subjects",
      "Write clear, detailed text on a wide range of subjects",
      "Function effectively in a professional German environment"
    ]
  },
  {
    level: "C1 - Advanced",
    description: "Can express ideas fluently and spontaneously without much searching for expressions.",
    canDo: [
      "Understand demanding, longer texts and recognize implicit meaning",
      "Use language flexibly and effectively for social, academic and professional purposes",
      "Produce clear, well-structured, detailed text on complex subjects",
      "Follow films and TV shows with relative ease",
      "Negotiate and persuade effectively at a professional level"
    ]
  },
  {
    level: "C2 - Proficiency",
    description: "Can understand virtually everything heard or read with ease. Can express very precisely, differentiating finer shades of meaning.",
    canDo: [
      "Understand virtually everything heard or read",
      "Summarize information from different spoken and written sources",
      "Reconstruct arguments and accounts in a coherent presentation",
      "Express yourself spontaneously with high fluency and precision",
      "Function at the level of an educated native speaker in most contexts"
    ]
  }
];

const GermanLanguagePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-german-primary text-white py-16">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">German Language Resources</h1>
            <p className="text-xl max-w-3xl">
              Essential tools and resources to help you learn German for your career and life in Germany
            </p>
          </div>
        </div>

        <section className="container mx-auto py-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">Why Learn German?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Professional Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-german-primary mr-3 mt-1">•</div>
                    <p>More job opportunities, especially in small and medium-sized companies</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-german-primary mr-3 mt-1">•</div>
                    <p>Higher salary potential with bilingual skills</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-german-primary mr-3 mt-1">•</div>
                    <p>Better integration into German workplace culture</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-german-primary mr-3 mt-1">•</div>
                    <p>Faster career advancement in German companies</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-german-primary mr-3 mt-1">•</div>
                    <p>Easier networking with German colleagues and clients</p>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Personal Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-german-primary mr-3 mt-1">•</div>
                    <p>Easier daily interactions with locals and service providers</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-german-primary mr-3 mt-1">•</div>
                    <p>Better access to healthcare and government services</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-german-primary mr-3 mt-1">•</div>
                    <p>Stronger cultural integration and understanding</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-german-primary mr-3 mt-1">•</div>
                    <p>Simplified bureaucratic processes</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-german-primary mr-3 mt-1">•</div>
                    <p>Faster path to permanent residency (with B1 level German)</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Understanding Language Levels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {languageLevels.map((level, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6 h-full">
                    <h3 className="text-xl font-semibold mb-2 text-german-primary">{level.level}</h3>
                    <p className="text-german-muted mb-4">{level.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">At this level, you can:</h4>
                      <ul className="list-disc pl-5">
                        {level.canDo.map((item, idx) => (
                          <li key={idx} className="text-sm text-german-muted mb-1">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <Tabs defaultValue="courses" className="w-full">
              <TabsList className="flex flex-wrap justify-center mb-8">
                <TabsTrigger value="courses" className="text-base px-4 py-2">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Language Courses
                </TabsTrigger>
                <TabsTrigger value="apps" className="text-base px-4 py-2">
                  <Monitor className="h-5 w-5 mr-2" />
                  Learning Apps
                </TabsTrigger>
                <TabsTrigger value="practice" className="text-base px-4 py-2">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Practice Resources
                </TabsTrigger>
                <TabsTrigger value="tests" className="text-base px-4 py-2">
                  <FileText className="h-5 w-5 mr-2" />
                  Language Tests
                </TabsTrigger>
              </TabsList>

              <TabsContent value="courses" className="mt-0">
                <h3 className="text-2xl font-bold mb-6">German Language Courses</h3>
                <div className="space-y-6">
                  {courses.map((course, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h4 className="text-xl font-semibold mb-2">{course.name}</h4>
                            <p className="text-german-muted mb-4">{course.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-4">
                              <div>
                                <span className="font-medium">Levels:</span> {course.levels}
                              </div>
                              <div>
                                <span className="font-medium">Pricing:</span> {course.pricing}
                              </div>
                            </div>
                            <ul className="flex flex-wrap gap-2">
                              {course.features.map((feature, idx) => (
                                <li key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-german-muted">
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-4 md:mt-0 md:ml-4">
                            <a 
                              href={course.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-german-primary text-white px-4 py-2 rounded inline-block hover:bg-german-primary/90 transition-colors"
                            >
                              Visit Website
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="apps" className="mt-0">
                <h3 className="text-2xl font-bold mb-6">Language Learning Apps</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {apps.map((app, index) => (
                    <Card key={index} className="h-full">
                      <CardContent className="p-6 h-full flex flex-col justify-between">
                        <div>
                          <h4 className="text-xl font-semibold mb-2">{app.name}</h4>
                          <p className="text-german-muted mb-3">{app.description}</p>
                          <div className="mb-3">
                            <span className="font-medium">Pricing:</span> {app.pricing}
                          </div>
                          <div className="mb-3">
                            <span className="font-medium">Best for:</span> {app.bestFor}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Key Features:</h5>
                          <ul className="list-disc pl-5">
                            {app.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-german-muted mb-1">{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="practice" className="mt-0">
                <h3 className="text-2xl font-bold mb-6">Practice Resources</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Globe className="h-8 w-8 text-german-primary mr-3" />
                        <h4 className="text-xl font-semibold">Online Resources</h4>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <a 
                            href="https://www.dw.com/de/deutsch-lernen/s-2055" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-german-primary hover:underline font-medium"
                          >
                            Deutsche Welle
                          </a>
                          <p className="text-german-muted">News articles and learning materials at various levels</p>
                        </li>
                        <li>
                          <a 
                            href="https://chatterbug.com/en/blog" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-german-primary hover:underline font-medium"
                          >
                            Chatterbug Blog
                          </a>
                          <p className="text-german-muted">Blog posts about German grammar, vocabulary, and culture</p>
                        </li>
                        <li>
                          <a 
                            href="https://easy-german.de/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-german-primary hover:underline font-medium"
                          >
                            Easy German
                          </a>
                          <p className="text-german-muted">YouTube channel with authentic German conversations</p>
                        </li>
                        <li>
                          <a 
                            href="https://slowgerman.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-german-primary hover:underline font-medium"
                          >
                            Slow German
                          </a>
                          <p className="text-german-muted">Podcasts in slow, clear German with transcripts</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Headphones className="h-8 w-8 text-german-primary mr-3" />
                        <h4 className="text-xl font-semibold">Conversation Practice</h4>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <a 
                            href="https://www.tandem.net/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-german-primary hover:underline font-medium"
                          >
                            Tandem
                          </a>
                          <p className="text-german-muted">Language exchange app to find German conversation partners</p>
                        </li>
                        <li>
                          <a 
                            href="https://www.italki.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-german-primary hover:underline font-medium"
                          >
                            iTalki
                          </a>
                          <p className="text-german-muted">Platform to find professional German teachers for 1-on-1 lessons</p>
                        </li>
                        <li>
                          <a 
                            href="https://www.meetup.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-german-primary hover:underline font-medium"
                          >
                            Meetup
                          </a>
                          <p className="text-german-muted">Find German language meetups in your city</p>
                        </li>
                        <li>
                          <a 
                            href="https://www.hellotalk.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-german-primary hover:underline font-medium"
                          >
                            HelloTalk
                          </a>
                          <p className="text-german-muted">Chat with native German speakers who are learning your language</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <BookOpen className="h-8 w-8 text-german-primary mr-3" />
                        <h4 className="text-xl font-semibold">Books & Grammar Resources</h4>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <span className="font-medium">Hammer's German Grammar and Usage</span>
                          <p className="text-german-muted">Comprehensive reference guide to German grammar</p>
                        </li>
                        <li>
                          <span className="font-medium">Schaum's Outline of German Grammar</span>
                          <p className="text-german-muted">Clear explanations with plenty of exercises</p>
                        </li>
                        <li>
                          <a 
                            href="https://deutsch.lingolia.com/en/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-german-primary hover:underline font-medium"
                          >
                            Lingolia German
                          </a>
                          <p className="text-german-muted">Online grammar explanations and exercises</p>
                        </li>
                        <li>
                          <a 
                            href="https://www.dartmouth.edu/~german/Grammatik/Grammatik.html" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-german-primary hover:underline font-medium"
                          >
                            Dartmouth German Grammar
                          </a>
                          <p className="text-german-muted">Free comprehensive online German grammar resource</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Monitor className="h-8 w-8 text-german-primary mr-3" />
                        <h4 className="text-xl font-semibold">Media Resources</h4>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <a 
                            href="https://www.ardmediathek.de/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-german-primary hover:underline font-medium"
                          >
                            ARD Mediathek
                          </a>
                          <p className="text-german-muted">Streaming platform for German public television</p>
                        </li>
                        <li>
                          <a 
                            href="https://www.zdf.de/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-german-primary hover:underline font-medium"
                          >
                            ZDF Mediathek
                          </a>
                          <p className="text-german-muted">German TV shows, news, and documentaries</p>
                        </li>
                        <li>
                          <a 
                            href="https://www.deutschlandfunk.de/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-german-primary hover:underline font-medium"
                          >
                            Deutschlandfunk
                          </a>
                          <p className="text-german-muted">German public radio with podcasts and articles</p>
                        </li>
                        <li>
                          <a 
                            href="https://www.netflix.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-german-primary hover:underline font-medium"
                          >
                            Netflix German Content
                          </a>
                          <p className="text-german-muted">German TV shows and films with language learning features</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="tests" className="mt-0">
                <h3 className="text-2xl font-bold mb-6">Official German Language Tests</h3>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-3">Goethe-Institut Examinations</h4>
                      <p className="mb-4">The most widely recognized German language certificates worldwide, offered by the official cultural institute of Germany.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium mb-2">Test Features</h5>
                          <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li className="text-german-muted">Available at all levels from A1 to C2</li>
                            <li className="text-german-muted">Tests all four language skills: reading, writing, listening, and speaking</li>
                            <li className="text-german-muted">Recognized by employers and universities worldwide</li>
                            <li className="text-german-muted">No expiration date</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Costs & Details</h5>
                          <ul className="list-disc pl-5 space-y-1">
                            <li className="text-german-muted">A1-B1: approximately €80-150</li>
                            <li className="text-german-muted">B2-C2: approximately €150-250</li>
                            <li className="text-german-muted">Offered at Goethe-Institut locations worldwide</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <a 
                          href="https://www.goethe.de/en/spr/kup/prf/prf.html" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-german-primary hover:underline"
                        >
                          Learn more about Goethe-Institut examinations
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-3">telc Language Tests</h4>
                      <p className="mb-4">Standardized tests with a practical focus, widely accepted for work and residence permits.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium mb-2">Test Features</h5>
                          <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li className="text-german-muted">Available at all CEFR levels (A1-C2)</li>
                            <li className="text-german-muted">Special tests for work and profession-specific German</li>
                            <li className="text-german-muted">Practical orientation with real-life scenarios</li>
                            <li className="text-german-muted">Valid for an unlimited period</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Costs & Details</h5>
                          <ul className="list-disc pl-5 space-y-1">
                            <li className="text-german-muted">A1-B1: approximately €110-160</li>
                            <li className="text-german-muted">B2-C2: approximately €160-220</li>
                            <li className="text-german-muted">Many test centers throughout Germany and worldwide</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <a 
                          href="https://www.telc.net/en/candidates/language-examinations.html" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-german-primary hover:underline"
                        >
                          Learn more about telc examinations
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-3">TestDaF (Test Deutsch als Fremdsprache)</h4>
                      <p className="mb-4">Standardized test specifically designed for university admission in Germany.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium mb-2">Test Features</h5>
                          <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li className="text-german-muted">Tests at levels B2-C1</li>
                            <li className="text-german-muted">Four sections: reading, listening, writing, and speaking</li>
                            <li className="text-german-muted">Required for university admission in Germany</li>
                            <li className="text-german-muted">Valid for an unlimited period</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Costs & Details</h5>
                          <ul className="list-disc pl-5 space-y-1">
                            <li className="text-german-muted">Cost: approximately €175-195</li>
                            <li className="text-german-muted">Computer-based test format</li>
                            <li className="text-german-muted">Offered at test centers worldwide</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <a 
                          href="https://www.testdaf.de/en/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-german-primary hover:underline"
                        >
                          Learn more about TestDaF
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-3">DTZ (Deutsch-Test für Zuwanderer)</h4>
                      <p className="mb-4">Official language test for the German integration course, required for certain residence permits and naturalization.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium mb-2">Test Features</h5>
                          <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li className="text-german-muted">Tests at levels A2-B1</li>
                            <li className="text-german-muted">Required component of integration courses</li>
                            <li className="text-german-muted">Tests reading, writing, listening, and speaking</li>
                            <li className="text-german-muted">Focus on everyday language and practical situations</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Costs & Details</h5>
                          <ul className="list-disc pl-5 space-y-1">
                            <li className="text-german-muted">Cost: usually included in the integration course fee</li>
                            <li className="text-german-muted">If taken separately: approximately €100</li>
                            <li className="text-german-muted">Administered by authorized test centers in Germany</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <a 
                          href="https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/AbschlussTest/abschlusstest-node.html" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-german-primary hover:underline"
                        >
                          Learn more about DTZ
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-german-primary text-white py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Improve Your German?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              We can help you find the right language learning resources for your career goals in Germany.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/resources/language-courses">
                <Button className="bg-white text-german-primary hover:bg-gray-100">
                  Explore Language Courses
                </Button>
              </Link>
              <a 
                href="mailto:ugandajobsgermany@gmail.com" 
                className="bg-german-secondary text-german-dark px-6 py-3 rounded-md inline-block hover:bg-german-secondary/90 transition-colors font-medium"
              >
                Get Personalized Advice
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GermanLanguagePage;
