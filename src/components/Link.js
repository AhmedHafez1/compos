import { useContext } from "react";
import NavigationContext from "../context/navigation";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const onNavigate = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a onClick={onNavigate} href="to">
      {children}
    </a>
  );
};

export default Link;
