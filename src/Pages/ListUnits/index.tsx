import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Grid,
  Tab,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { NewSelect } from "../../Components/NewSelect";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Container } from "./styles";

export const ListUnits = () => {
  const [list, setList] = useState("1");
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setList(newValue);
  };
  return (
    <Container container>
      <Header title="Gerenciar unidades Curriculares" />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={list}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box>
              <Grid container>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={4}>
                    <Typography variant="h1">Arquivos</Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <Input variant="standard" label="Titulo ou id" />
                  </Grid>
                  <Grid item xs={4}>
                    <NewSelect label="Filtrar" />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ width: 500, marginTop: "10px" }}>
                    <BottomNavigation
                      showLabels
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    >
                      <BottomNavigationAction
                        label="Recents"
                        icon={<RestoreIcon />}
                      />
                      <BottomNavigationAction
                        label="Favorites"
                        icon={<FavoriteIcon />}
                      />
                      <BottomNavigationAction
                        label="Nearby"
                        icon={<LocationOnIcon />}
                      />
                    </BottomNavigation>
                  </Box>
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
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};
