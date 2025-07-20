type QuestionType = "single-option" | "multi-option";

export type Question = {
  id: string;
  question: string;
  options: string[];
  type: QuestionType;
};

export const QUESTIONS: Question[] = [
  {
    id: "a5632f90-1223-4fbf-8cdf-673fd641fa33",
    question: "Have you had any issues when eating pears before?",
    options: ["Yes", "No"],
    type: "single-option",
  },
  {
    id: "18662376-8f10-4050-aa55-e1ea8bc1327c",
    question: "Have you ever had any issues in close proximity to pears?",
    options: ["Yes", "No"],
    type: "single-option",
  },
  {
    id: "4dfc5115-2558-404c-8201-b4b48f0980a9",
    question: "Are you between the ages of 55 and 65?",
    options: ["Yes", "No"],
    type: "single-option",
  },
  {
    id: "238a5d02-1406-448c-900a-3a89dfc2de68",
    question: "Do you have any other allergies or conditions?",
    options: ["Yes", "No"],
    type: "single-option",
  },
  {
    id: "9a72bc0f-3e1b-430f-82ea-1d4d31de4f22",
    question: "Do you wish to share these details with your GP?",
    options: ["Yes", "No"],
    type: "single-option",
  },
];
