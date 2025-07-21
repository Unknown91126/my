import { Award, Sprout, TrendingUp, Trophy, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Certifications() {
  const certificationLevels = [
    {
      level: "Beginner Level",
      description: "Perfect for getting started",
      icon: Sprout,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      certifications: [
        {
          name: "Google AI for Everyone",
          description: "Introduction to AI concepts and applications",
          duration: "4-6 weeks",
          cost: "Free",
          url: "https://www.coursera.org/learn/ai-for-everyone"
        },
        {
          name: "Elements of AI (University of Helsinki)",
          description: "Comprehensive AI fundamentals course",
          duration: "6 weeks", 
          cost: "Free",
          url: "https://www.elementsofai.com/"
        }
      ]
    },
    {
      level: "Intermediate Level",
      description: "Build practical skills",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10",
      certifications: [
        {
          name: "IBM Applied AI Professional Certificate",
          description: "Hands-on AI and machine learning projects",
          duration: "3-4 months",
          cost: "$39/month",
          url: "https://www.coursera.org/professional-certificates/applied-artifical-intelligence-ibm-watson-ai"
        },
        {
          name: "Microsoft AI Fundamentals (AI-900)",
          description: "Azure AI services and machine learning",
          duration: "2-3 months",
          cost: "$165 exam",
          url: "https://docs.microsoft.com/en-us/certifications/azure-ai-fundamentals/"
        }
      ]
    },
    {
      level: "Advanced Level",
      description: "Expert-level mastery",
      icon: Trophy,
      color: "text-accent",
      bgColor: "bg-accent/10",
      certifications: [
        {
          name: "DeepLearning.AI TensorFlow Developer",
          description: "Professional TensorFlow development skills",
          duration: "4-6 months",
          cost: "$49/month",
          url: "https://www.coursera.org/professional-certificates/tensorflow-in-practice"
        },
        {
          name: "Stanford AI Professional Program",
          description: "Graduate-level AI specialization",
          duration: "9-12 months",
          cost: "$3,000+",
          url: "https://online.stanford.edu/programs/artificial-intelligence-professional-program"
        }
      ]
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            <Award className="inline text-accent mr-3" />
            AI Certifications by Level
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Industry-recognized certifications to validate your AI knowledge and skills
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certificationLevels.map((level, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className={`${level.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <level.icon className={`text-2xl ${level.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{level.level}</h3>
                  <p className="text-slate-600">{level.description}</p>
                </div>
                
                <div className="space-y-4">
                  {level.certifications.map((cert, certIndex) => (
                    <div key={certIndex} className={`border-l-4 ${level.color.replace('text-', 'border-')} pl-4`}>
                      <h4 className="font-semibold text-slate-800">
                        <a 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline cursor-pointer"
                        >
                          {cert.name}
                        </a>
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">{cert.description}</p>
                      <div className="flex justify-between text-xs text-slate-500">
                        <span className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {cert.duration}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="mr-1 h-3 w-3" />
                          {cert.cost}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
