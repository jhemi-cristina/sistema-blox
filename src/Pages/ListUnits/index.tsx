import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Tab,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

import { InputSearch } from "../../Components/InputSearch";
import { CardUnit } from "./Components/CardUnit";
import { filterModality, filterTitleAndId } from "./Functions";
import { getUnitsService } from "./Service";
import { Container } from "./styles";

interface ITeste {
  data: any;
}
export const ListUnits = () => {
  const [list, setList] = useState("1");
  const [unitList, setUnitList] = useState<Dispatch<SetStateAction<ITeste>>>();
  const [filterSelected, setFilterSelected] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleTabItem = (event: React.SyntheticEvent, newValue: string) => {
    setList(newValue);
  };

  const handleSelectedItem = (event: SelectChangeEvent) => {
    setFilterSelected(event.target.value);
  };

  const handleFilterItem = (event: SelectChangeEvent) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    async function getUnits() {
      const data = await getUnitsService(currentPage);
      setUnitList(data);
    }
    getUnits();
  }, [currentPage]);

  useMemo(() => {
    if (searchValue && searchValue.length !== search.length) {
      setSearch("");
    }
  }, [search.length, searchValue]);

  return (
    <Container container>
      <Grid item md={12} sm={12}>
        <Box
          sx={{
            gridArea: "header",
            padding: "15px 30px",
            width: "100%",
            color: "#ffff",
            backgroundColor: "#608afc",
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            Gerenciar unidades Curriculares
          </Typography>
        </Box>
      </Grid>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={list}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              backgroundColor: "#608afc",
              color: "#ffff",
            }}
          >
            <TabList onChange={handleTabItem} aria-label="lab API tabs example">
              <Tab
                label="Lista"
                value="1"
                sx={{
                  color: "#ffff",
                  padding: "0px!important",
                  fontSize: "12px",
                }}
              />
              <Tab
                label="Criar novo"
                value="2"
                sx={{
                  color: "#ffff",
                  padding: "0px!important",
                  fontSize: "12px",
                }}
              />
            </TabList>
          </Box>

          <TabPanel value="1">
            <Box>
              <Grid container>
                <Grid container display="flex" spacing={2} alignItems="center">
                  <Grid item lg={7}>
                    <Typography variant="h1">Arquivos</Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <InputSearch
                      variant="standard"
                      placeholder="Titulo ou id"
                      onChange={(e: SelectChangeEvent<string>) =>
                        handleFilterItem(e)
                      }
                      onClick={() => setSearch(searchValue)}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <FormControl variant="standard" sx={{ width: "100%" }}>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={filterSelected}
                        onChange={handleSelectedItem}
                        displayEmpty
                        label="Exibir todos"
                      >
                        <MenuItem value="">
                          <em>Exibir todos</em>
                        </MenuItem>
                        <MenuItem value="Presencial">
                          Categoria - Presencial
                        </MenuItem>
                        <MenuItem value="EAD">Categoria - EAD</MenuItem>
                        <MenuItem value="accepted">Status - Aprovado</MenuItem>
                        <MenuItem value="active">
                          Status - Aberto para edição
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  {unitList instanceof Array &&
                    unitList
                      .filter((item) => filterModality(item, filterSelected))
                      .filter((item) => filterTitleAndId(item, search))
                      .map((item) => (
                        <Grid key={item?.id} item lg={4} sm={12} mt={5}>
                          <CardUnit data={item} />
                        </Grid>
                      ))}
                </Grid>
                <Stack
                  direction="row"
                  spacing={5}
                  sx={{
                    display: "flex",
                    margin: "0 auto",
                    padding: "70px 0px",
                  }}
                >
                  <Box>
                    <Button
                      variant="contained"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Anterior
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === 10}
                    >
                      Proximo
                    </Button>
                  </Box>
                </Stack>
              </Grid>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};
