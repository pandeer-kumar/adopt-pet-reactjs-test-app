import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

// const App = () => {
//   return React.createElement("div", { id: "my-brand" }, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       Animal: "Dog",
//       bread: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       Animal: "Bird",
//       bread: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       Animal: "Dog",
//       bread: "Wheaten Terrier",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

// https://btholt.github.io/complete-intro-to-react-v6/
