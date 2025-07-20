"use client";

import { Question } from "@/data/questions";
import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

type QuestionFieldProps = {
  question: Omit<Question, "type">;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

export function QuestionField({
  question,
  value,
  onChange,
  disabled = false,
}: Readonly<QuestionFieldProps>) {
  return (
    <>
      <Typography color="textSecondary">{question.question}</Typography>
      <RadioGroup
        name={`question-${question.id}`}
        value={value}
        onChange={(_, val) => {
          onChange(val);
        }}
      >
        {question.options.map((option) => {
          return (
            <FormControlLabel
              key={option}
              value={option}
              label={option}
              control={<Radio />}
              disabled={disabled}
            />
          );
        })}
      </RadioGroup>
    </>
  );
}
