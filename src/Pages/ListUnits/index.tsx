import { Box, Grid, Typography } from "@mui/material";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { NewSelect } from "../../Components/NewSelect";
import { Container } from "./styles";

export const ListUnits = () => {
  return (
    <Container container>
      <Header title="Gerenciar Unidades  Curriculares" />
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h1">Arquivos</Typography>
          </Grid>
          <Grid item xs={12}>
            <NewSelect label="Filtrar" />
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
