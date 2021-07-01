import React from "react"
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button";
import "../App.css"

const styles = createMuiTheme({
  typography:{
    button:{
      textTransform:"none",
    },
  },
});

type Props = {
  children: any,
  onClick: () => void
};
const MyButton = ({children,onClick}: Props) => {
  return(
    <ThemeProvider theme={styles}>
      <Button onClick={onClick} color="primary" variant="contained" className="button">
      {children}
      </Button>
      </ThemeProvider>

  );
}
export default MyButton