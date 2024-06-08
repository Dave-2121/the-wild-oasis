import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkmodeContext";

function DarkmodeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  function handleDarkMode() {
    toggleDarkMode();
  }

  return (
    <ButtonIcon onClick={handleDarkMode}>
      {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkmodeToggle;
