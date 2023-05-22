import NavigationContext from "../context/navigation";
import { useContext } from "react";

const Route = ({ path, children }) => {
  const { currentPath } = useContext(NavigationContext);

  return currentPath === path ? children : null;
};

export default Route;
