import { Box, Button, Checkbox, Grid, Typography } from "@mui/material";
import { Input } from "../../Components/Input";
import { Container } from "./styles";

export const SignUp = () => {
  return (
    <Container container spacing={2}>
      <Box sx={{ maxWidth: "50%", margin: "0 auto" }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={12}>
            <Typography variant="h1">Quero me cadastrar</Typography>
          </Grid>
          <Grid item md={12}>
            <Input label="Nome" />
          </Grid>
          <Grid item md={6}>
            <Input label="CPF" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item md={6}>
            <Input label="data de nascimento" />
          </Grid>
          <Grid item md={12}>
            <Input label="E-mail" />
          </Grid>
          <Grid item md={12}>
            <Input label="Crie sua senha" />
          </Grid>
          <Grid item md={12}>
            <Input label="Confirme sua senha" />
          </Grid>
          <Grid item md={12}>
            <Typography variant="subtitle1">
              <Checkbox defaultChecked />
              Você aceita receber comunicações por E-mail?
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Grid container spacing={2} mt={5}>
              <Grid item>
                <Button title="CADASTRAR" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
