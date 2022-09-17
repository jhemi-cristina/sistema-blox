import { Box, Button, Grid, Typography } from "@mui/material";
import { Input } from "../../Components/Input";
import { Container } from "./styles";
import { useAuth } from "../../Context/AuthContext";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const { SignIn } = useAuth();
  const { control, handleSubmit, watch } = useForm();
  const watchFields = watch();
  const navigate = useNavigate();

  function handleSubmitForm() {
    const { username, password } = watchFields;
    SignIn({ username, password });
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Container container>
        <Box sx={{ maxWidth: "50%", margin: "0 auto" }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={12} mb={5}>
              <Typography variant="h1">Seja Bem-Vindo(a)!</Typography>
            </Grid>
            <Grid item md={12} mb={5}>
              <Typography variant="subtitle1">Painel de acesso</Typography>
            </Grid>
            <Grid item md={12}>
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    onChange={onChange}
                    name={name}
                    value={value}
                    label="nome do usuario"
                    variant="standard"
                  />
                )}
              />
            </Grid>
            <Grid item md={12}>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    onChange={onChange}
                    name={name}
                    value={value}
                    label="Senha"
                    variant="standard"
                    type="password"
                  />
                )}
              />
            </Grid>
            <Grid item md={12}>
              <Grid container spacing={2} mt={5}>
                <Grid item>
                  <Button onClick={() => navigate("/register")}>VOLTAR</Button>
                </Grid>
                <Grid item>
                  <Button onClick={handleSubmitForm}>ACESSAR</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </form>
  );
};
