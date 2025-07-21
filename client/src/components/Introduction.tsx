import { Lightbulb, Bot, History, Rocket, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Introduction() {
  const cards = [
    {
      icon: Bot,
      title: "What is AI?",
      description: "Artificial Intelligence is computer technology that can think, learn, and solve problems like humans do, but much faster and with lots of data.",
      features: [
        "Machine thinking and learning",
        "Problem-solving automation", 
        "Pattern recognition"
      ],
      color: "text-primary"
    },
    {
      icon: History,
      title: "AI in Daily Life",
      description: "From recommendation systems to voice assistants, AI is already part of our everyday experiences.",
      features: [
        "Netflix recommendations",
        "Siri and Alexa",
        "Google Maps navigation"
      ],
      color: "text-secondary"
    },
    {
      icon: Rocket,
      title: "Future Careers",
      description: "AI is creating new job opportunities and transforming existing careers across all industries.",
      features: [
        "AI Engineer",
        "Data Scientist",
        "Machine Learning Specialist"
      ],
      color: "text-accent"
    }
  ];

  return (
    <section id="intro" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            <Lightbulb className="inline text-accent mr-3" />
            Introduction to Artificial Intelligence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Understanding AI from the ground up - what it is, how it evolved, and why it matters for your future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-slate-50">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <card.icon className={`text-4xl ${card.color} mb-4 mx-auto`} />
                  <h3 className="text-xl font-semibold text-slate-800">{card.title}</h3>
                </div>
                <p className="text-slate-600 mb-4">{card.description}</p>
                <ul className="space-y-2">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-slate-600 flex items-center">
                      <Check className="text-secondary mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
