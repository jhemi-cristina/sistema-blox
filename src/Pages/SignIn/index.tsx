import { Box, Button, Grid, Stack, Typography } from "@mui/material";
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
        <Box sx={{ maxWidth: "100%", margin: "0 auto" }}>
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
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
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
            </Box>
            <Grid item md={12} sm={12}>
              <Stack
                direction="row"
                spacing={2}
                sx={{ marginTop: "40px", width: "100%" }}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/register")}
                  >
                    VOLTAR
                  </Button>
                </Grid>
                <Grid item md={12} sm={12}>
                  <Grid item>
                    <Button variant="contained" onClick={handleSubmitForm}>
                      ACESSAR
                    </Button>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </form>
  );
};
