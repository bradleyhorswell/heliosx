import { Stack, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

export function FormSuccess() {
  return (
    <Stack sx={{ gap: 1, alignItems: "center", justifyContent: "center" }}>
      <DoneIcon color="primary" fontSize="large" />
      <Typography variant="h5">
        Thank you for submitting your answers!
      </Typography>
      <Typography color="textSecondary">
        We will be in touch shortly.
      </Typography>
    </Stack>
  );
}
