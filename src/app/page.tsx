import { Box } from "@mui/material";
import { ConsultationForm } from "@/components/ConsultationForm";
import { QUESTIONS } from "@/data/questions";

export default function Home() {
  return (
    <Box sx={{ maxWidth: "sm", width: "100%" }}>
      <ConsultationForm questions={QUESTIONS} />
    </Box>
  );
}
