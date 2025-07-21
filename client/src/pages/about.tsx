import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Brain, Users, Target, Lightbulb, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Brain className="text-6xl text-primary mb-6 mx-auto" />
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              About AI Learning Hub
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Empowering the next generation with comprehensive AI education through 
              age-appropriate resources, interactive learning, and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6">
                AI Learning Hub was created to bridge the gap between complex artificial intelligence 
                concepts and accessible education for students of all ages. We believe that understanding 
                AI should not be limited to computer science experts, but should be available to anyone 
                curious about this transformative technology.
              </p>
              <p className="text-lg text-slate-600">
                Our platform provides carefully curated resources, from elementary-level introductions 
                to college-level deep dives, ensuring that every learner can find their appropriate 
                starting point and grow at their own pace.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl p-8">
              <Target className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Our Goal</h3>
              <p className="text-slate-600">
                To democratize AI education and prepare students for a future where understanding 
                artificial intelligence is as fundamental as reading and writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">What We Offer</h2>
            <p className="text-xl text-slate-600">
              Comprehensive learning tools designed for different educational levels
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">Age-Appropriate Content</h3>
                <p className="text-slate-600">
                  Carefully structured learning paths for elementary, high school, and college students.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Lightbulb className="text-4xl text-secondary mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">Interactive Learning</h3>
                <p className="text-slate-600">
                  Hands-on quizzes, practical exercises, and engaging activities to reinforce concepts.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="text-4xl text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">Certification Guidance</h3>
                <p className="text-slate-600">
                  Clear pathways to industry-recognized AI and machine learning certifications.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">Curated Resources</h3>
                <p className="text-slate-600">
                  Hand-picked websites, videos, books, and tools from trusted educational sources.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Brain className="text-4xl text-secondary mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">Comprehensive Coverage</h3>
                <p className="text-slate-600">
                  From basic AI concepts to advanced topics like neural networks and deep learning.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="text-4xl text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">Progress Tracking</h3>
                <p className="text-slate-600">
                  Interactive quizzes with personalized recommendations for continued learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Values</h2>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                <Users className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Accessibility</h3>
                <p className="text-slate-600">
                  AI education should be accessible to everyone, regardless of their background or prior experience.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-secondary/10 rounded-full p-3 flex-shrink-0">
                <Lightbulb className="text-secondary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Quality</h3>
                <p className="text-slate-600">
                  We carefully curate all resources to ensure they meet high educational standards and provide accurate information.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 rounded-full p-3 flex-shrink-0">
                <Target className="text-accent h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Practicality</h3>
                <p className="text-slate-600">
                  Our content focuses on practical applications and real-world examples to make AI concepts tangible and relevant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}