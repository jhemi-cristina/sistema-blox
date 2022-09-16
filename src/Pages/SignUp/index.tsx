import { Box, Button, Checkbox, Grid, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../Components/Input";
import { useAuth } from "../../Context/AuthContext";
import { Container } from "./styles";

export const SignUp = () => {
  const { control, handleSubmit, watch } = useForm();
  const { SignUp } = useAuth();
  const watchFields = watch();

  function handleSubmitForm() {
    const { name, cpf, date, email, password, password_confirm } = watchFields;
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
                    type="name"
                  />
                )}
              />
            </Grid>
            <Grid item md={6}>
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
                    variant="outlined"
                    type="cpf"
                  />
                )}
              />
            </Grid>
            <Grid item md={6}>
              <Controller
                control={control}
                name="date"
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    InputLabelProps={{ shrink: true }}
                    onChange={onChange}
                    name={name}
                    value={value}
                    label="data de nascimento"
                    variant="outlined"
                    type="date"
                  />
                )}
              />
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
                  <Button onClick={handleSubmitForm}>CADASTRAR</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </form>
  );
};
