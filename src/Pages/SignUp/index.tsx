import { Box, Button, Checkbox, Grid, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../Components/Input";
import { useAuth } from "../../Context/AuthContext";

import { Container } from "./styles";

export const SignUp = () => {
  const { control, handleSubmit, watch } = useForm();
  const { SignUp } = useAuth();
  const watchFields = watch();

  const { name, cpf, date, email, password, password_confirm } = watchFields;

  function handleSubmitForm() {
    SignUp({
      name,
      cpf,
      date,
      email,
      password,
      password_confirm,
    });
    console.log("watchFields", watchFields);
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
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
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    onChange={onChange}
                    name={name}
                    value={value}
                    label="Nome"
                    variant="outlined"
                    error={watchFields?.name?.length < 3}
                    helperText={
                      watchFields?.name?.length < 3 && "*Campo obrigatório."
                    }
                  />
                )}
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <Controller
                control={control}
                name="cpf"
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    InputLabelProps={{ shrink: true }}
                    onChange={onChange}
                    name={name}
                    value={value}
                    label="CPF"
                    placeholder="999999999"
                    variant="outlined"
                    error={cpf?.length < 11}
                    helperText={
                      cpf?.length < 11 &&
                      "*Este campo é obrigatório e deve ter no minimo 11 caracteres"
                    }
                  />
                )}
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <Box sx={{ width: "100%!important" }}>
                <Controller
                  control={control}
                  name="date"
                  render={({ field: { onChange, value, name } }) => (
                    <Input
                      InputLabelProps={{ width: "100%", shrink: true }}
                      onChange={onChange}
                      name={name}
                      value={value}
                      label="data de nascimento"
                      variant="outlined"
                      type="date"
                    />
                  )}
                />
              </Box>
            </Grid>
            <Grid item md={12}>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    InputLabelProps={{ shrink: true }}
                    onChange={onChange}
                    name={name}
                    value={value}
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    error={email?.length <= 9}
                    helperText={
                      email?.length <= 9 && "*Este campo é obrigatório"
                    }
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
                    InputLabelProps={{ shrink: true }}
                    onChange={onChange}
                    name={name}
                    value={value}
                    label="Crie sua senha"
                    variant="outlined"
                    type="password"
                    error={password?.length < 8}
                    helperText={
                      password?.length < 8 &&
                      "*A senha deve ter no mínimo 8 caracteres."
                    }
                  />
                )}
              />
            </Grid>
            <Grid item md={12}>
              <Controller
                control={control}
                name="password_confirm"
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    InputLabelProps={{ shrink: true }}
                    onChange={onChange}
                    name={name}
                    value={value}
                    label="Confirme sua senha"
                    variant="outlined"
                    type="password"
                    error={password_confirm && password_confirm !== password}
                    helperText={
                      password_confirm &&
                      password_confirm !== password &&
                      "*A senha deve ser a mesma digitada anteriormente."
                    }
                  />
                )}
              />
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
                  <Button
                    variant="contained"
                    onClick={handleSubmitForm}
                    disabled={email?.length <= 9 || cpf?.length < 11}
                  >
                    CADASTRAR
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </form>
  );
};
