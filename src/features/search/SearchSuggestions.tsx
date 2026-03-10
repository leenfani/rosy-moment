import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NormalizedProduct } from "../../types/index";

interface SearchSuggestionsProps {
  suggestions: NormalizedProduct[];
}
export default function SearchSuggestions({
  suggestions,
}: SearchSuggestionsProps) {
  const navigate = useNavigate();

  if (!suggestions.length) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        bgcolor: "background.paper",
        mt: 5,
        width: { xs: "200px", md: "400px" },
        boxShadow: 3,
        zIndex: 10,
      }}
    >
      {suggestions.map((item) => (
        <Box
          key={item.id}
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
            gap: 2,
            cursor: "pointer",
            "&:hover": { bgcolor: "action.hover" },
          }}
          onClick={() =>
            navigate(`/search?q=${encodeURIComponent(item.title)}`)
          }
        >
          <img
            src={item.image}
            alt={item.title}
            width={40}
            height={40}
            style={{ objectFit: "cover" }}
          />

          <Typography noWrap>{item.title}</Typography>
        </Box>
      ))}
    </Box>
  );
}
