import { Box, Link, Stack, Typography } from "@mui/material";

export function Footer() {
  return (
    <Stack
      component="footer"
      sx={{
        gap: 2,
        p: 2,
        alignItems: "center",
        backgroundColor: "primary.main",
        color: "white",
        flexDirection: { sm: "column", md: "row" },
        justifyContent: { sm: "center", md: "space-evenly" },
      }}
    >
      <Stack gap={0.5}>
        <Link color="inherit" href="#">
          About
        </Link>
        <Link color="inherit" href="#">
          FAQ
        </Link>
        <Link color="inherit" href="#">
          Terms
        </Link>
      </Stack>
      <Box>
        <Typography textAlign="center">
          ©2025 All Rights Reserved. ZipHealth® is a registered trademark.
        </Typography>
      </Box>
    </Stack>
  );
}
