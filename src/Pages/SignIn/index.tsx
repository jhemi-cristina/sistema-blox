import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Container } from "./styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);
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
            <Input label="Name de Usuário" variant="standard" />
          </Grid>
          <Grid item xs={12}>
            <Input
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
