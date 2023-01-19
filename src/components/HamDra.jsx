import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const HamDra = () => {
  const Pages = ["Home", "Description", "About", "OurServices"];
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List
          sx={{
            background: "#063970",
            color: "white",
            height: "100vh",
          }}
        >
          {Pages.map((page, index) => (
            <ListItemButton key={index} onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItemText
                  sx={{
                    fontWeight: "300",
                    color: "white",
                    fontSize: "19px",
                  }}
                >
                  {page}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          marginLeft: "auto",
          color: "white",
        }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default HamDra;
