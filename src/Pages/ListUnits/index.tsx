import { Box, Grid, Typography } from "@mui/material";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Container } from "./styles";

export const ListUnits = () => {
  return (
    <Container container>
      <Box sx={{ maxWidth: "50%" }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h1">Seja Bem-Vindo(a)!</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Painel de acesso</Typography>
          </Grid>
          <Grid item xs={12}>
            <Input label="Name de Usuário" />
          </Grid>
          <Grid item xs={12}>
            <Input label="Senha" />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} mt={5}>
              <Grid item>
                <Button title="VOLTAR" />
              </Grid>
              <Grid item>
                <Button title="ACESSAR" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
