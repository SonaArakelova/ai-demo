import { Outlet } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Header } from "../../components/header";
import { SideBar } from "../../components/sidebar";

export const Navigation = () => {
  return (
    <>
      <CssBaseline />
      <div className="app">
        <SideBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            backgroundColor: "#222222",
            color:  "#f6f6f6",
            padding:"15px"
          }}
        >
          <Header />

          <Outlet />
        </Box>
      </div>
    </>
  );
};