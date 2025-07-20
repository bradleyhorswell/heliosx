"use client";

import { Question } from "@/data/questions";
import { submitConsultation } from "@/utils/submitConsultation";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { QuestionField } from "./QuestionField";

type ConsultationFormProps = {
  questions: Question[];
};

export function ConsultationForm({
  questions,
}: Readonly<ConsultationFormProps>) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentQuestion.id] ?? null;
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleNext = () => {
    setCurrentIndex((i) => i + 1);
  };

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleSubmit = async () => {
    if (isLoading) return;
    setIsLoading(true);
    await submitConsultation(answers);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted)
    return (
      <Typography textAlign="center">
        Thank you for submitting your answers!
      </Typography>
    );

  return (
    <Stack
      sx={{
        border: 1,
        borderRadius: 2,
        p: 4,
        gap: 2,
        borderColor: "primary.main",
      }}
    >
      <Typography variant="h6">
        Question {currentIndex + 1} of {questions.length}
      </Typography>
      <QuestionField
        question={currentQuestion}
        value={currentAnswer}
        onChange={handleAnswer}
        disabled={isLoading}
      />
      {isLastQuestion && (
        <Button
          variant="contained"
          disabled={!currentAnswer}
          onClick={handleSubmit}
          loading={isLoading}
          sx={{ width: "fit-content", color: "success" }}
        >
          Submit
        </Button>
      )}
      {!isLastQuestion && (
        <Button
          variant="contained"
          disabled={!currentAnswer}
          onClick={handleNext}
          sx={{ width: "fit-content", color: "primary" }}
        >
          Next
        </Button>
      )}
    </Stack>
  );
}
