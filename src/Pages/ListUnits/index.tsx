import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tab,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { CardUnit } from "./Components/CardUnit";
import { getUnitsService } from "./Service";
import { Container } from "./styles";

interface ITeste {
  data: any;
}
export const ListUnits = () => {
  const [list, setList] = useState("1");
  const [unitList, setUnitList] = useState<Dispatch<SetStateAction<ITeste>>>();
  const [filterSelected, setFilterSelected] = useState("");

  const handleTabItem = (event: React.SyntheticEvent, newValue: string) => {
    setList(newValue);
  };

  const handleSelectedItem = (event: SelectChangeEvent) => {
    setFilterSelected(event.target.value);
  };

  useEffect(() => {
    async function getUnits() {
      const data = await getUnitsService();

      setUnitList(data);
    }

    getUnits();
  }, []);

  // console.log("unitList", unitList);

  return (
    <Container container>
      <Header />

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
                  <Grid item lg={8}>
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
                        value={filterSelected}
                        onChange={handleSelectedItem}
                        displayEmpty
                        label="Filtrar"
                      >
                        <MenuItem value="">
                          <em>Exibir todos</em>
                        </MenuItem>
                        <MenuItem value="Presencial">Presencial</MenuItem>
                        <MenuItem value="EAD">EAD</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  {unitList instanceof Array &&
                    unitList
                      .filter((item) =>
                        filterSelected ? item.modality === filterSelected : " "
                      )
                      .map((item) => (
                        <Grid key={item?.id} item lg={4} sm={12} mt={5}>
                          <CardUnit data={item} />
                        </Grid>
                      ))}
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
