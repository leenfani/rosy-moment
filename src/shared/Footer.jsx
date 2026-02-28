import { Box, Typography, Divider } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      sx={{
        minHeight: "200px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.main",
        color: "white",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          letterSpacing: "2px",
          fontWeight: 900,
          textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
        }}
      >
        Contact with me
      </Typography>
      <Divider
        sx={{
          width: "400px",
          bgcolor: "white",
          mb: 2,
        }}
      />
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box
          component="a"
          href="https://wa.link/w87gs0"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <WhatsAppIcon
            sx={{
              fontSize: "40px",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.2)",
                color: "#25D366",
              },
            }}
          />
        </Box>
        <Box
          component="a"
          href="https://github.com/leenfani"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <GitHubIcon
            sx={{
              fontSize: "40px",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.2)",
                color: "black",
              },
            }}
          />
        </Box>
        <Box
          component="a"
          href="https://www.linkedin.com/in/leen-fani-6763903b4/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <LinkedInIcon
            sx={{
              fontSize: "40px",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.2)",
                color: "#0A66C2",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
