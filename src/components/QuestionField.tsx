"use client";

import { Question } from "@/data/questions";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

type QuestionFieldProps = {
  question: Pick<Question, "options" | "question">;
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
        name={question.question}
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
