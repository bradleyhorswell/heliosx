import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Question } from "@/data/questions";
import { ConsultationForm } from "../ConsultationForm";

const mockQuestions: Question[] = [
  {
    id: "q1",
    question: "Do you like pears?",
    options: ["Yes", "No"],
    type: "single-option",
  },
  {
    id: "q2",
    question: "Are you allergic?",
    options: ["Yes", "No"],
    type: "single-option",
  },
];

describe("ConsultationForm", () => {
  it("should initially render first question and disable Next button", () => {
    render(<ConsultationForm questions={mockQuestions} />);

    expect(screen.getByText("Do you like pears?")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next" })).toBeDisabled();
  });

  it("should enable Next button after answering", async () => {
    const user = userEvent.setup();
    render(<ConsultationForm questions={mockQuestions} />);

    await user.click(screen.getByLabelText("Yes"));

    expect(screen.getByRole("button", { name: "Next" })).toBeEnabled();
  });

  it("should move to second question when Next is clicked", async () => {
    const user = userEvent.setup();
    render(<ConsultationForm questions={mockQuestions} />);

    expect(screen.getByText("Do you like pears?")).toBeInTheDocument();

    await user.click(screen.getByLabelText("Yes"));
    await user.click(screen.getByRole("button", { name: "Next" }));

    expect(screen.getByText("Are you allergic?")).toBeInTheDocument();
    expect(screen.queryByText("Do you like pears?")).not.toBeInTheDocument();
  });
});
