import React from "react";
import { Box, Typography, Stack, IconButton, Divider } from "@mui/material";
import { Email, LinkedIn, Instagram, GitHub } from "@mui/icons-material";

export default function ConnectSection() {
  const email = "yonichurikina@gmail.com";
  const accent = "#32620e"; // your green

  return (
    <Box sx={{ py: 10, textAlign: "center" }}>
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 400,
          mb: 2,
        }}
      >
        let&apos;s <span style={{ color: accent }}>connect</span>
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          color: "grey.700",
          maxWidth: 600,
          mx: "auto",
          mb: 5,
        }}
      >
        I'm always open to creative projects, new challenges or just a chat,
        so don&apos;t hesitate to reach out!
      </Typography>

      {/* Divider line */}
      <Divider
        sx={{
          width: "60px",
          mx: "auto",
          mb: 4,
          borderBottomWidth: 2,
          borderColor: accent,
        }}
      />

      {/* Social Icons */}
      <Stack direction="row" justifyContent="center" spacing={3}>
        {/* Email */}
        <IconButton
          component="a"
          href={`mailto:${email}`}
          sx={{
            border: `2px solid ${accent}`,
            color: accent,
            width: 56,
            height: 56,
            "&:hover": { bgcolor: accent, color: "white" },
          }}
        >
          <Email fontSize="medium" />
        </IconButton>

        {/* LinkedIn */}
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/yoana-churkina-9408a1234/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            border: `2px solid ${accent}`,
            color: accent,
            width: 56,
            height: 56,
            "&:hover": { bgcolor: accent, color: "white" },
          }}
        >
          <LinkedIn fontSize="medium" />
        </IconButton>

        {/* GitHub */}
        <IconButton
          component="a"
          href="https://github.com/Yoana01"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            border: `2px solid ${accent}`,
            color: accent,
            width: 56,
            height: 56,
            "&:hover": { bgcolor: accent, color: "white" },
          }}
        >
          <GitHub fontSize="medium" />
        </IconButton>
      </Stack>
    </Box>
  );
}
