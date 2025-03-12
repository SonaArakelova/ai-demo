import { useState } from "react";
import { NavLink } from "react-router";
import {
  Fade,
  Drawer,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";

import {Chat} from "../pages/chat/index"

export const SideBar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: extended ? 250 : 80,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          backgroundColor: "#333333",
          color: "f6f6f6",
          width: extended ? 250 : 80,
          transition: "width 0.15s ease, padding 0.3s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px",
          overflow: "hidden",
        },
      }}
    >
      <List>
        <ListItem 
        button onClick={() => setExtended(!extended)}>
          <ListItemIcon
          sx={{
              color: "white",
          }}
          >
            <MenuIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem component={NavLink} to="/">
          <ListItemIcon
          sx={{
            color: "white",
        }}
        >
            <AddIcon />
          </ListItemIcon>
          <Fade in={extended} timeout={300}
          sx={{
            color: "white",
        }}>
            <ListItemText primary="New Chat" />
          </Fade>
        </ListItem>
        <Chat/>
      </List>
      <Divider />
      <List>
        <ListItem component={NavLink} to="/activities">
          <ListItemIcon
          sx={{
            color: "white",
        }}>
            <HistoryIcon />
          </ListItemIcon>
          <Fade in={extended} timeout={300}
          sx={{
            color: "white",
        }}>
            <ListItemText primary="Activities" />
          </Fade>
        </ListItem>

        <ListItem component={NavLink} to="/help">
          <ListItemIcon
          sx={{
            color: "white",
        }}>
            <HelpOutlineIcon />
          </ListItemIcon>
          <Fade in={extended} timeout={300}
          sx={{
            color: "white",
        }}>
            <ListItemText primary="Help" />
          </Fade>
        </ListItem>

        <ListItem component={NavLink} to="/settings"
        sx={{
            color: "white",
        }}>
          <ListItemIcon
          sx={{
            color: "white",
        }}>
            <SettingsIcon />
          </ListItemIcon>
          <Fade in={extended} timeout={300}>
            <ListItemText primary="Settings" />
          </Fade>
        </ListItem>
      </List>
    </Drawer>
  );
};





