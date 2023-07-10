import * as React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box, IconButton, Typography } from "@mui/material";

export const AppBar = (props) => {
  return (
    <header>
      <Box display="flex" justifyContent="space-between" padding={"24px"}>
        <Box display="flex">
          <IconButton>
            <HomeIcon />
          </IconButton>
          <Typography> / Dashboard</Typography>
        </Box>
        <Box display="flex">
          <Box>
            <InputBase placeholder="Search" sx={{ ml: 2, flex: 1}} />
            <IconButton>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box >
            <IconButton>
              <AccountCircleIcon fontSize="small" sx={{ 'backgroundColor': "transparent" }} />
              <Typography>Sign in</Typography>
            </IconButton>
          </Box>
          <Box>
            <IconButton>
              <SettingsRoundedIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box>
            <IconButton>
              <NotificationsIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </header>
  );
};
