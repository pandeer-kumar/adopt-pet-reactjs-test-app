import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { StrictMode } from "react";

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
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
