import { useState } from "react";
import { HelpCircle, Trophy, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { quizQuestions } from "@/lib/quiz-data";

interface QuizAnswer {
  questionId: number;
  answer: string;
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const submitQuizMutation = useMutation({
    mutationFn: async (data: { score: number; totalQuestions: number; answers: string }) => {
      return apiRequest("POST", "/api/quiz-results", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/quiz-stats"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit quiz results. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNext = () => {
    if (currentAnswer) {
      const newAnswer: QuizAnswer = {
        questionId: currentQuestion,
        answer: currentAnswer
      };
      
      setSelectedAnswers(prev => {
        const filtered = prev.filter(a => a.questionId !== currentQuestion);
        return [...filtered, newAnswer];
      });

      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setCurrentAnswer("");
      } else {
        finishQuiz([...selectedAnswers.filter(a => a.questionId !== currentQuestion), newAnswer]);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      const prevAnswer = selectedAnswers.find(a => a.questionId === currentQuestion - 1);
      setCurrentAnswer(prevAnswer?.answer || "");
    }
  };

  const finishQuiz = (allAnswers: QuizAnswer[]) => {
    let score = 0;
    allAnswers.forEach(answer => {
      const question = quizQuestions[answer.questionId];
      if (question && answer.answer === question.correctAnswer) {
        score++;
      }
    });

    const quizData = {
      score,
      totalQuestions: quizQuestions.length,
      answers: JSON.stringify(allAnswers)
    };

    submitQuizMutation.mutate(quizData);
    setShowResults(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setCurrentAnswer("");
  };

  const calculateScore = () => {
    let score = 0;
    selectedAnswers.forEach(answer => {
      const question = quizQuestions[answer.questionId];
      if (question && answer.answer === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const getRecommendations = (score: number) => {
    if (score >= 4) {
      return [
        "Excellent knowledge! Consider exploring advanced ML courses",
        "Try building your first AI project with Teachable Machine", 
        "Check out our college-level resources section"
      ];
    } else if (score >= 2) {
      return [
        "Good foundation! Review our AI fundamentals section",
        "Start with beginner-friendly resources for your age group",
        "Practice with interactive tools like Scratch or Code.org"
      ];
    } else {
      return [
        "Great start! Begin with our Introduction to AI section",
        "Explore age-appropriate learning materials",
        "Take your time with the fundamentals before moving forward"
      ];
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const currentQ = quizQuestions[currentQuestion];

  if (showResults) {
    const score = calculateScore();
    const recommendations = getRecommendations(score);
    
    return (
      <section id="quiz" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="text-center">
              <Trophy className="text-6xl text-accent mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Quiz Complete!</h3>
              <p className="text-xl text-slate-600">
                You scored <span className="font-bold text-primary">{score}</span> out of {quizQuestions.length}
              </p>
            </div>
            
            <Card className="mt-6 mb-6">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Recommended Next Steps:</h4>
                <div className="space-y-2 text-slate-600">
                  {recommendations.map((rec, index) => (
                    <p key={index} className="flex items-start">
                      <CheckCircle className="text-secondary mr-2 mt-0.5 h-4 w-4" />
                      {rec}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <Button onClick={restartQuiz} size="lg">
                Take Quiz Again
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            <HelpCircle className="inline text-primary mr-3" />
            Test Your AI Knowledge
          </h2>
          <p className="text-xl text-slate-600">
            Take this quick quiz to see how much you already know about AI!
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8">
          {/* Quiz Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-slate-600 mb-2">
              <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          {/* Question Container */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">
              {currentQ.question}
            </h3>
            <RadioGroup value={currentAnswer} onValueChange={setCurrentAnswer}>
              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label 
                      htmlFor={option.id}
                      className="flex-1 p-4 border border-slate-200 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors"
                    >
                      {option.text}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Quiz Controls */}
          <div className="flex justify-between">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!currentAnswer}
            >
              {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
