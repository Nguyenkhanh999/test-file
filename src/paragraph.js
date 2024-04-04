import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
  const theme = useContext(ThemeContext);

  return <p className={theme}>Đây là code</p>;
}
export default Paragraph;
