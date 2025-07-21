import { useState } from "react";
import { BookOpen, Baby, GraduationCap, University, Globe, Youtube, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type AgeGroup = 'elementary' | 'high' | 'college';

export default function LearningResources() {
  const [activeAge, setActiveAge] = useState<AgeGroup>('elementary');

  const ageGroups = {
    elementary: {
      title: "For Young Learners (Grades 5-8)",
      subtitle: "Fun, interactive, and game-based learning to introduce AI concepts",
      icon: Baby,
      color: "bg-grade-elementary",
      gradient: "from-pink-500/10 to-pink-100",
      websites: [
        { name: "Scratch.mit.edu", description: "Visual programming", url: "https://scratch.mit.edu/" },
        { name: "Code.org", description: "Hour of Code activities", url: "https://code.org/" },
        { name: "AI4ALL", description: "AI education for kids", url: "https://ai-4-all.org/" },
        { name: "Kodable", description: "Programming fundamentals", url: "https://www.kodable.com/" }
      ],
      youtube: [
        { name: "ScratchEd", description: "Scratch tutorials", url: "https://www.youtube.com/@ScratchEd" },
        { name: "Code.org", description: "Coding fundamentals", url: "https://www.youtube.com/@codeorg" },
        { name: "Crash Course Kids", description: "Tech concepts", url: "https://www.youtube.com/@crashcoursekids" },
        { name: "Tynker", description: "Programming for kids", url: "https://www.youtube.com/@TynkerTV" }
      ],
      books: [
        { name: "AI for Kids", author: "by Dale Lane" },
        { name: "Hello Ruby", author: "by Linda Liukas" },
        { name: "Coding Games in Scratch", author: "" },
        { name: "DK Workbooks: Computer Coding", author: "" }
      ]
    },
    high: {
      title: "For High School Students (Grades 9-12)",
      subtitle: "Interactive tools and structured courses to build AI understanding",
      icon: GraduationCap,
      color: "bg-grade-high",
      gradient: "from-purple-500/10 to-purple-100",
      websites: [
        { name: "Teachable Machine", description: "Google's ML tool", url: "https://teachablemachine.withgoogle.com/" },
        { name: "MIT App Inventor", description: "Mobile AI apps", url: "https://appinventor.mit.edu/" },
        { name: "Elements of AI", description: "University course", url: "https://www.elementsofai.com/" },
        { name: "Codecademy", description: "Python basics", url: "https://www.codecademy.com/learn/learn-python-3" }
      ],
      youtube: [
        { name: "3Blue1Brown", description: "Neural networks", url: "https://www.youtube.com/@3blue1brown" },
        { name: "Sentdex", description: "Python & ML tutorials", url: "https://www.youtube.com/@sentdex" },
        { name: "Two Minute Papers", description: "AI research", url: "https://www.youtube.com/@TwoMinutePapers" },
        { name: "Crash Course Computer Science", description: "Computer fundamentals", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo" }
      ],
      books: [
        { name: "Make Your Own Neural Network", author: "by Tariq Rashid" },
        { name: "Python Crash Course", author: "" },
        { name: "Weapons of Math Destruction", author: "" },
        { name: "AI Superpowers", author: "by Kai-Fu Lee" }
      ]
    },
    college: {
      title: "For College Students",
      subtitle: "Professional-level courses and industry-standard tools",
      icon: University,
      color: "bg-grade-college",
      gradient: "from-red-500/10 to-red-100",
      websites: [
        { name: "Coursera - Andrew Ng's ML Course", description: "Stanford Machine Learning course", url: "https://www.coursera.org/learn/machine-learning" },
        { name: "Fast.ai - Practical Deep Learning", description: "Practical deep learning for coders", url: "https://www.fast.ai/" },
        { name: "edX - MIT Introduction to AI", description: "MIT's AI fundamentals", url: "https://www.edx.org/course/introduction-to-artificial-intelligence-ai" },
        { name: "Udacity AI Nanodegree", description: "AI career program", url: "https://www.udacity.com/course/ai-artificial-intelligence-nanodegree--nd898" }
      ],
      youtube: [
        { name: "Python + scikit-learn", description: "Machine learning tutorials", url: "https://www.youtube.com/results?search_query=python+scikit-learn+tutorial" },
        { name: "TensorFlow & Keras", description: "Deep learning framework", url: "https://www.youtube.com/@TensorFlow" },
        { name: "PyTorch", description: "Research-focused ML framework", url: "https://www.youtube.com/@PyTorch" },
        { name: "Jupyter Notebooks", description: "Interactive coding environment", url: "https://www.youtube.com/results?search_query=jupyter+notebook+tutorial" }
      ],
      books: [
        { name: "Kaggle Competitions", description: "Real-world ML challenges", url: "https://www.kaggle.com/competitions" },
        { name: "Google Colab", description: "Free cloud notebooks", url: "https://colab.research.google.com/" },
        { name: "GitHub Projects", description: "AI/ML open source projects", url: "https://github.com/topics/machine-learning" },
        { name: "Papers With Code", description: "Latest research papers", url: "https://paperswithcode.com/" }
      ]
    }
  };

  const currentGroup = ageGroups[activeAge];

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            <BookOpen className="inline text-secondary mr-3" />
            Learning Resources by Age Group
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Curated learning materials designed specifically for different educational levels
          </p>
        </div>

        {/* Age Group Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-4">
          <Button
            onClick={() => setActiveAge('elementary')}
            className={`px-6 py-3 font-semibold ${
              activeAge === 'elementary' 
                ? 'bg-grade-elementary text-white' 
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            <Baby className="mr-2 h-4 w-4" />
            Grades 5-8 (Ages 10-13)
          </Button>
          <Button
            onClick={() => setActiveAge('high')}
            className={`px-6 py-3 font-semibold ${
              activeAge === 'high' 
                ? 'bg-grade-high text-white' 
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            <GraduationCap className="mr-2 h-4 w-4" />
            Grades 9-12 (Ages 14-17)
          </Button>
          <Button
            onClick={() => setActiveAge('college')}
            className={`px-6 py-3 font-semibold ${
              activeAge === 'college' 
                ? 'bg-grade-college text-white' 
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            <University className="mr-2 h-4 w-4" />
            College Students
          </Button>
        </div>

        {/* Content */}
        <div className={`bg-gradient-to-r ${currentGroup.gradient} rounded-xl p-8 mb-8`}>
          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
            <currentGroup.icon className={`mr-3 text-3xl ${activeAge === 'elementary' ? 'text-grade-elementary' : activeAge === 'high' ? 'text-grade-high' : 'text-grade-college'}`} />
            {currentGroup.title}
          </h3>
          <p className="text-slate-600 mb-6">{currentGroup.subtitle}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Websites */}
            <Card className="bg-white shadow-md">
              <CardContent className="p-4">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                  <Globe className={`mr-2 ${activeAge === 'elementary' ? 'text-grade-elementary' : activeAge === 'high' ? 'text-grade-high' : 'text-grade-college'}`} />
                  {activeAge === 'college' ? 'Courses' : 'Websites'}
                </h4>
                <ul className="space-y-2 text-sm">
                  {currentGroup.websites.map((item, index) => (
                    <li key={index}>
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline cursor-pointer font-medium"
                      >
                        {item.name}
                      </a>
                      {item.description && <span className="text-slate-600"> - {item.description}</span>}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* YouTube/Tools */}
            <Card className="bg-white shadow-md">
              <CardContent className="p-4">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                  <Youtube className="mr-2 text-red-500" />
                  {activeAge === 'college' ? 'Tools & Libraries' : 'YouTube Channels'}
                </h4>
                <ul className="space-y-2 text-sm">
                  {currentGroup.youtube.map((item, index) => (
                    <li key={index}>
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline cursor-pointer font-medium"
                      >
                        {item.name}
                      </a>
                      {item.description && <span className="text-slate-600"> - {item.description}</span>}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Books/Practice */}
            <Card className="bg-white shadow-md">
              <CardContent className="p-4">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                  <Book className="mr-2 text-secondary" />
                  {activeAge === 'college' ? 'Practice' : 'Recommended Books'}
                </h4>
                <ul className="space-y-2 text-sm">
                  {currentGroup.books.map((item, index) => (
                    <li key={index}>
                      {'url' in item ? (
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline cursor-pointer font-medium"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span className="text-slate-700 font-medium">{item.name}</span>
                      )}
                      {'author' in item && item.author && <span className="text-slate-600"> {item.author}</span>}
                      {'description' in item && item.description && <span className="text-slate-600"> - {item.description}</span>}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
