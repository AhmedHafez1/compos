import Link from "./components/Link";
import Route from "./components/Route";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  return (
    <div>
      <Link to="/buttons">Buttons</Link>
      <Link to="/dropdown">Dropdown</Link>
      <Link to="/accordions">Accordions</Link>
      <Route path="/buttons">
        <ButtonPage />
      </Route>
      <Route path="/accordions">
        <AccordionPage />
      </Route>
      <Route path="/dropdown">
        <DropdownPage />
      </Route>
    </div>
  );
}

export default App;
