import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Card,
  FormControl,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  Tab,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Container } from "./styles";

export const ListUnits = () => {
  const [list, setList] = useState("1");
  const [age, setAge] = useState("");

  const handleTabItem = (event: React.SyntheticEvent, newValue: string) => {
    setList(newValue);
  };

  const handleSelectedItem = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Container container>
      <Header title="Gerenciar unidades Curriculares" />

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={list}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleTabItem} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <Box>
              <Grid container>
                <Grid container display="flex" alignItems="center">
                  <Grid item xs={8}>
                    <Typography variant="h1">Arquivos</Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Input variant="standard" placeholder="Titulo ou id" />
                  </Grid>

                  <Grid item xs={2}>
                    <FormControl variant="standard" sx={{ width: "100%" }}>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleSelectedItem}
                        displayEmpty
                        label="Filtrar"
                      >
                        <MenuItem value="">
                          <em>Filtrar</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid item xs={12} mt={5}>
                  <Card>
                    <Stack sx={{ backgroundColor: "red", padding: "0px 10px" }}>
                      Título
                    </Stack>
                    <Stack
                      sx={{ backgroundColor: "blue", padding: "0px 10px" }}
                    >
                      Coteúdo
                    </Stack>
                    <Stack sx={{ backgroundColor: "red", padding: "0px 10px" }}>
                      Footer
                    </Stack>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          {/* <TabPanel value="2">Item Two</TabPanel> */}
        </TabContext>
      </Box>
    </Container>
  );
};
