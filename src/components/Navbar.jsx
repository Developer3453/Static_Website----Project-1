import React from "react";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import HamDra from "./HamDra";

const Navbar = () => {
  const [value, setValue] = useState();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const Pages = ["Home", "Description", "About", "OurServices"];

  return (
    <>
      <Stack
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <AppBar
          sx={{
            background: "#063970",
          }}
        >
          <Toolbar>
            {isMatch ? (
              <>
                <Typography variant="h4" fontSize="21px" fontWeight="bold">
                  ShowsOfBooks
                </Typography>
                <HamDra />
              </>
            ) : (
              <>
                <Typography variant="h4" fontSize="21px" fontWeight="bold">
                  ShowsOfBooks
                </Typography>
                <Stack
                  sx={{
                    flexDirection: {
                      xs: "column",
                      md: "row",
                    },
                    textAlign: {
                      xs: "center",
                    },
                    marginLeft: "auto",
                  }}
                >
                  <Tabs
                    indicatorColor="secondary"
                    textColor="inherit"
                    color="inherit"
                    value={value}
                    onChange={(e, value) => setValue(value)}
                  >
                    {Pages.map((page, index) => (
                      <Tab key={index} label={page}></Tab>
                    ))}
                  </Tabs>
                </Stack>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Stack>
    </>
  );
};

export default Navbar;
