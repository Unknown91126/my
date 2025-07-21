import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Subdomains from "@/components/Subdomains";
import LearningResources from "@/components/LearningResources";
import Certifications from "@/components/Certifications";
import SkillsKnowledge from "@/components/SkillsKnowledge";
import Downloadables from "@/components/Downloadables";
import Quiz from "@/components/Quiz";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <Introduction />
      <Subdomains />
      <LearningResources />
      <Certifications />
      <SkillsKnowledge />
      <Downloadables />
      <Quiz />
      <Contact />
      <Footer />
    </div>
  );
}
