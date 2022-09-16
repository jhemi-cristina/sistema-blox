import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Input } from "../../Components/Input";
import { Container } from "./styles";
import { VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../../Context/AuthContext";
import { Controller, useForm } from "react-hook-form";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);
  const { SignIn } = useAuth();
  const { control, handleSubmit, watch } = useForm();
  const watchFields = watch();

  function handleSubmitForm() {
    const { username, password } = watchFields;
    SignIn({ username, password });
  }

  // const [values, setValues] = React.useState<State>({
  //   amount: "",
  //   password: "",
  //   weight: "",
  //   weightRange: "",
  //   showPassword: false,
  // });
  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });

  //   const handleMouseDownPassword = (
  //     event: React.MouseEvent<HTMLButtonElement>
  //   ) => {
  //     event.preventDefault();
  //   };
  // };
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
            <Grid item xs={12} mb={5}>
              <Typography variant="h1">Seja Bem-Vindo(a)!</Typography>
            </Grid>
            <Grid item xs={12} mb={5}>
              <Typography variant="subtitle1">Painel de acesso</Typography>
            </Grid>
            <Grid item xs={12}>
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
                    width={500}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <Grid container spacing={2} mt={5}>
                <Grid item>
                  <Button />
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
