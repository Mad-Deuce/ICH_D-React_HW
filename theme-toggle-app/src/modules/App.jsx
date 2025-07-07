/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useContext } from "react";
import { CssBaseline } from "@mui/material";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { themePaletteModeContext } from "/src/shared/context/AppThemeProvider";

export default function App() {
  const { toggleTheme, themePaletteMode } = useContext(themePaletteModeContext);

  const text = themePaletteMode === "light" ? "Light Mode" : "Dark Mode";

  const buttonStyle = css`
    background: linear-gradient(45deg, #fe6b8b 30%, #fe6b8b 90%);
    border: 0;
  `;

  return (
    <>
      <CssBaseline />
      <Container>
        <Typography sx={{ margin: "10px" }}>{text}</Typography>
        <Button css={buttonStyle} variant="contained" onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </Container>
    </>
  );
}
