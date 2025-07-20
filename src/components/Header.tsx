import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Image from "next/image";

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{
            gap: 2,
            py: 2,
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Image src="/logo.png" alt="ZipHealth logo" width={150} height={40} />
          <Typography variant="h5">Genovian Consultation</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
