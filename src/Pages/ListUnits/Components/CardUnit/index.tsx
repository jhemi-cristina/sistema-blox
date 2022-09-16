import { Avatar, Card, Grid, Stack, Typography } from "@mui/material";

export function CardUnit({ data }: any) {
  const { id, title, modality, cached_blox } = data;
  const primaryColor = cached_blox?.knowledge_area?.color2;
  const secondaryColor = cached_blox?.knowledge_area?.color1;

  return (
    <Card sx={{ color: "#ffff" }}>
      <Stack
        sx={{
          backgroundColor: secondaryColor,
          padding: "10px",
        }}
      >
        <Typography variant="body2" sx={{ lineHeight: "0.8!important" }}>
          Data limite
        </Typography>
        <Typography>15/09/2022</Typography>
      </Stack>
      <Stack sx={{ backgroundColor: primaryColor, padding: "10px" }}>
        <Grid container>
          <Grid item lg={2} sm={12}>
            Image
          </Grid>
          <Grid item lg={10} sm={12}>
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item lg={2} sm={12}>
            <Typography variant="body2" sx={{ lineHeight: "0.8!important" }}>
              ID
            </Typography>
            <Typography>{id}</Typography>
          </Grid>
          <Grid item lg={10} sm={12}>
            <Typography variant="body2" sx={{ lineHeight: "0.8!important" }}>
              Modalidade
            </Typography>
            <Typography>{modality}</Typography>
          </Grid>
        </Grid>
      </Stack>
      <Stack sx={{ backgroundColor: secondaryColor, padding: "10px" }}>
        <Avatar sx={{ width: 30, height: 30, border: "2px solid #fff" }}>
          J
        </Avatar>
      </Stack>
    </Card>
  );
}
