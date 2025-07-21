import { TrendingUp, Brain, MessageCircle, Eye, Bot, GraduationCap, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Subdomains() {
  const subdomains = [
    {
      icon: TrendingUp,
      title: "Machine Learning",
      description: "Teaching computers to learn patterns from data without being explicitly programmed for every task.",
      example: "Email spam detection, recommendation systems",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "Deep Learning", 
      description: "Using artificial neural networks inspired by the human brain to solve complex problems.",
      example: "Image recognition, language translation",
      color: "text-secondary"
    },
    {
      icon: MessageCircle,
      title: "Natural Language Processing",
      description: "Helping computers understand, interpret, and generate human language naturally.",
      example: "ChatGPT, Google Translate, voice assistants",
      color: "text-accent"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Teaching computers to \"see\" and understand images and videos like humans do.",
      example: "Face recognition, medical imaging, self-driving cars",
      color: "text-purple-500"
    },
    {
      icon: Bot,
      title: "Robotics",
      description: "Combining AI with physical machines to create robots that can move and interact with the world.",
      example: "Manufacturing robots, delivery drones, surgical robots",
      color: "text-red-500"
    },
    {
      icon: GraduationCap,
      title: "Expert Systems",
      description: "AI systems that mimic the decision-making ability of human experts in specific fields.",
      example: "Medical diagnosis systems, financial advisors",
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="subdomains" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            <Settings className="inline text-primary mr-3" />
            AI Subdomains
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore the different branches of AI and discover which area interests you most
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subdomains.map((subdomain, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <subdomain.icon className={`text-3xl ${subdomain.color} mr-4`} />
                  <h3 className="text-xl font-semibold text-slate-800">{subdomain.title}</h3>
                </div>
                <p className="text-slate-600 mb-4">{subdomain.description}</p>
                <div className="text-sm text-slate-500">
                  <strong>Example:</strong> {subdomain.example}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
