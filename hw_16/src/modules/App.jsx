import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


export default function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <Typography variant="h6">My Material UI App</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography sx={{ marginBlock: "2rem" }} >
          Добро пожаловать в наше приложение!
        </Typography>
        <Button variant="contained" onClick={handleClickOpen}>
          Открыть диалоговое окно
        </Button>
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Использовать Material UI?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Это простое React приложение с использованием Material UI. Вы можете
            настроить его по своему усмотрению
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleClose} autoFocus>
            Согласен
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
