import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  const scrollToQuiz = () => {
    const element = document.getElementById("quiz");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToResources = () => {
    const element = document.getElementById("resources");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Your Gateway to <span className="text-primary">Artificial Intelligence</span> Learning
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Discover the fascinating world of AI through age-appropriate resources, interactive learning, and expert guidance for students from elementary to college level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToResources} size="lg" className="text-lg px-8 py-3">
                Start Learning
              </Button>
              <Button onClick={scrollToQuiz} variant="outline" size="lg" className="text-lg px-8 py-3">
                Take Quiz
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-xl shadow-lg">
              <GraduationCap className="text-2xl mb-2" />
              <p className="text-sm font-semibold">For All Ages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
