export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What does 'AI' stand for?",
    options: [
      { id: "a", text: "Artificial Intelligence" },
      { id: "b", text: "Automated Information" },
      { id: "c", text: "Advanced Internet" },
      { id: "d", text: "Augmented Interface" }
    ],
    correctAnswer: "a"
  },
  {
    id: 2,
    question: "Which of these is an example of Machine Learning?",
    options: [
      { id: "a", text: "A calculator performing arithmetic" },
      { id: "b", text: "Netflix recommending movies based on your viewing history" },
      { id: "c", text: "A word processor checking spelling" },
      { id: "d", text: "A digital clock showing time" }
    ],
    correctAnswer: "b"
  },
  {
    id: 3,
    question: "What is the main goal of Natural Language Processing (NLP)?",
    options: [
      { id: "a", text: "To make computers faster" },
      { id: "b", text: "To help computers understand and process human language" },
      { id: "c", text: "To create better graphics" },
      { id: "d", text: "To improve internet connectivity" }
    ],
    correctAnswer: "b"
  },
  {
    id: 4,
    question: "Which programming language is most commonly used for AI development?",
    options: [
      { id: "a", text: "HTML" },
      { id: "b", text: "CSS" },
      { id: "c", text: "Python" },
      { id: "d", text: "Microsoft Word" }
    ],
    correctAnswer: "c"
  },
  {
    id: 5,
    question: "What is Computer Vision primarily used for?",
    options: [
      { id: "a", text: "Making websites look better" },
      { id: "b", text: "Helping computers 'see' and understand images and videos" },
      { id: "c", text: "Creating video games" },
      { id: "d", text: "Managing databases" }
    ],
    correctAnswer: "b"
  }
];
