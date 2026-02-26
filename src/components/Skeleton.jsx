import { Skeleton, Box } from "@mui/material";
export default function ShowSkeleton() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "800px",
          width:"100%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{
            width: {
              xs: "80%",
              md: "60%",
            },
            height: "70%",
            borderRadius: "40px",
            boxShadow: "0px 20px 40px  rgba(0,0,0,0.4)",
          }}
        />

        <Skeleton
          width="50%"
          height={30}
          sx={{ borderRadius: "10px", mt: "50px" }}
        />
        <Skeleton width="30%" height={20} sx={{ borderRadius: "10px" }} />
      </Box>
    </>
  );
}
