import { Puzzle, Calculator, Code, Lightbulb, CheckCircle } from "lucide-react";

export default function SkillsKnowledge() {
  const skillCategories = [
    {
      title: "Mathematical Foundation",
      icon: Calculator,
      color: "text-secondary",
      skills: [
        {
          name: "Basic Algebra",
          description: "Understanding variables, equations, and functions"
        },
        {
          name: "Statistics & Probability",
          description: "Mean, median, distributions, and basic probability"
        },
        {
          name: "Linear Algebra (Advanced)",
          description: "Vectors, matrices for deep learning"
        }
      ]
    },
    {
      title: "Programming Skills",
      icon: Code,
      color: "text-primary",
      skills: [
        {
          name: "Python Basics",
          description: "Variables, loops, functions, and data structures"
        },
        {
          name: "Problem-Solving",
          description: "Breaking down complex problems into smaller steps"
        }
      ]
    },
    {
      title: "Essential Mindset",
      icon: Lightbulb,
      color: "text-accent",
      skills: [
        {
          name: "Curiosity",
          description: "Asking \"why\" and \"how\" to understand concepts deeply"
        },
        {
          name: "Logical Thinking",
          description: "Approaching problems systematically"
        },
        {
          name: "Creativity",
          description: "Finding innovative solutions and applications"
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            <Puzzle className="inline text-primary mr-3" />
            Skills & Knowledge Required
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Essential foundations to build before diving deep into AI learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {skillCategories.map((category, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <category.icon className={`${category.color} mr-3`} />
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-start">
                      <CheckCircle className={`${category.color} mt-1 mr-3 h-4 w-4`} />
                      <div>
                        <strong className="text-slate-800">{skill.name}:</strong>
                        <span className="text-slate-600"> {skill.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Educational materials and study setup" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <Puzzle className="text-3xl text-primary mb-2 mx-auto" />
                <p className="text-sm font-semibold text-slate-800">Start Learning Today!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
