import type { Metadata } from "next";
import "./globals.css";
import { Box, Stack } from "@mui/material";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Genovian Consultation",
  description: "Genovian Consultation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Stack minHeight="100vh" gap={4}>
          <Header />
          <Box
            component="main"
            sx={{
              flex: 1,
              p: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {children}
          </Box>
          <Footer />
        </Stack>
      </body>
    </html>
  );
}
