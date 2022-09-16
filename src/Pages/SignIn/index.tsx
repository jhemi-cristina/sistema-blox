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
    const { login_user_email, login_user_password } = watchFields;
    SignIn({ login_user_email, login_user_password });
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
              name="login_user_email"
              render={({ field: { onChange, value, name } }) => (
                <Input
                  onChange={onChange}
                  name={name}
                  value={value}
                  label="usuario"
                  variant="standard"
                  width={500}
                />
              )}
            />
          </Grid>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="login_user_password"
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    onChange={onChange}
                    name={name}
                    value={value}
                    label="Senha"
                    variant="standard"
                    type="password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          // onClick={handleClickShowPassword}
                          // onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOff sx={{ color: "#000" }} />
                          ) : (
                            <p>testess</p>
                            // <Visibility sx={{ color: "#000" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
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
          </form>
        </Grid>
      </Box>
    </Container>
  );
};
