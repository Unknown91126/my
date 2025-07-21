import { Download, Route, Settings, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Downloadables() {
  const aiTools = [
    {
      name: "ChatGPT",
      description: "AI conversation and assistance",
      icon: "💬",
      color: "text-blue-500",
      url: "https://chat.openai.com/"
    },
    {
      name: "DALL-E 2", 
      description: "AI image generation",
      icon: "🎨",
      color: "text-purple-500",
      url: "https://openai.com/dall-e-2/"
    },
    {
      name: "Google Gemini",
      description: "Search and information AI",
      icon: "🔍", 
      color: "text-green-500",
      url: "https://gemini.google.com/"
    },
    {
      name: "Teachable Machine",
      description: "Build your own ML models",
      icon: "🧠",
      color: "text-indigo-500",
      url: "https://teachablemachine.withgoogle.com/"
    }
  ];

  return (
    <section id="downloads" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            <Download className="inline text-secondary mr-3" />
            Downloadables & Tools
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Free resources, roadmaps, and interactive tools to accelerate your AI learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Roadmap Charts */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <Route className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-slate-800">Learning Roadmaps</h3>
              </div>
              <p className="text-slate-600 mb-6">Step-by-step learning paths for each age group</p>
              <div className="space-y-3">
                <Button 
                  variant="outline"
                  className="w-full bg-grade-elementary/10 text-grade-elementary border-grade-elementary hover:bg-grade-elementary hover:text-white transition-colors"
             onClick={() => window.open("https://www.geeksforgeeks.org/blogs/how-to-become-an-artificial-intelligence-ai-engineer/", "_blank")}>
                  <Download className="mr-2 h-4 w-4" />
                  Elementary Roadmap PDF
                </Button>
                <Button 
                  variant="outline"
                  className="w-full bg-grade-high/10 text-grade-high border-grade-high hover:bg-grade-high hover:text-white transition-colors"
            onClick={()=> window.open("https://www.geeksforgeeks.org/blogs/how-to-become-an-artificial-intelligence-ai-engineer/", "_blank")}    >
                  <Download className="mr-2 h-4 w-4" />
                  High School Roadmap PDF
                </Button>
                <Button 
                  variant="outline"
                  className="w-full bg-grade-college/10 text-grade-college border-grade-college hover:bg-grade-college hover:text-white transition-colors"
           onClick={()=> window.open("https://roadmap.sh/ai-engineer", "_blank")}     >
                  <Download className="mr-2 h-4 w-4" />
                  College Roadmap PDF
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Tools to Try */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <Settings className="text-4xl text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-slate-800">AI Tools to Explore</h3>
              </div>
              <p className="text-slate-600 mb-6">Hands-on experience with popular AI applications</p>
              <div className="space-y-3">
                {aiTools.map((tool, index) => (
                  <a
                    key={index}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-50 hover:bg-slate-100 p-3 rounded-lg transition-colors cursor-pointer block"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{tool.icon}</span>
                      <div>
                        <div className="font-medium text-slate-800">{tool.name}</div>
                        <div className="text-xs text-slate-600">{tool.description}</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* PDF Handbooks */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <FileText className="text-4xl text-red-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-slate-800">Study Handbooks</h3>
              </div>
              <p className="text-slate-600 mb-6">Comprehensive guides and reference materials</p>
              <div className="space-y-3">
                <Button 
                  variant="outline"
                  className="w-full bg-red-50 text-red-600 border-red-200 hover:bg-red-100 transition-colors"
            onClick={()=>{window.open("https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://cbseacademic.nic.in/web_material/Curriculum25/publication/srsec/843_AI_Student_HandbookXI.pdf&ved=2ahUKEwicw5riy8uOAxXw2TgGHS_JFK0QFnoECB8QAQ&usg=AOvVaw0nVwlwXBfhtjepkFcIhqSi")}}    >
                  <FileText className="mr-2 h-4 w-4" />
                  AI Fundamentals Handbook
                </Button>
                <Button 
                  variant="outline"
                  className="w-full bg-red-50 text-red-600 border-red-200 hover:bg-red-100 transition-colors"
              onClick={()=>{window.open("https://developers.google.com/machine-learning/glossary")}}  >
                  <FileText className="mr-2 h-4 w-4" />
                  Machine Learning Glossary
                </Button>
                <Button 
                  variant="outline"
                  className="w-full bg-red-50 text-red-600 border-red-200 hover:bg-red-100 transition-colors"
              onClick={()=>{window.open("https://www.geeksforgeeks.org/artificial-intelligence/python-for-ai/")}}  >
                  <FileText className="mr-2 h-4 w-4" />
                  Python for AI Quick Reference
                </Button>
                <Button 
                  variant="outline"
                  className="w-full bg-red-50 text-red-600 border-red-200 hover:bg-red-100 transition-colors"
               onClick={()=>{window.open("https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.unesco.org/en/artificial-intelligence/recommendation-ethics&ved=2ahUKEwjk7LaAz8uOAxWWyDgGHaO_G3UQFnoECCQQAQ&usg=AOvVaw0wDxY718hGfgbx9wx-VLUG")}} >
                  <FileText className="mr-2 h-4 w-4" />
                  AI Ethics Guidelines
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
