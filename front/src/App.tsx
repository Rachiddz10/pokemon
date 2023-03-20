import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../src/Comps/NavBar";

import AllTrainers from "./Componenets/AllTrainers";
import AllPokemons from "./Componenets/AllPokemons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageHome from "./Componenets/PageHome";
import AddTrainer from "./Componenets/AddTrainer";
import AddPokemon from "./Componenets/AddPokemon";
import UpdateTrainer from "./Componenets/UpdateTrainer";
import UpdatePokemon from "./Componenets/UpdatePokemon";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/Trainers" element={<AllTrainers />} />
          <Route path="/Pokemons" element={<AllPokemons />} />
          <Route path="/AddTrainer" element={<AddTrainer />} />
          <Route path="/AddPokemon" element={<AddPokemon />} />
          <Route path="/UpdateTrainer" element={<UpdateTrainer />} />
          <Route path="/UpdatePokemon" element={<UpdatePokemon />} />
          {/* 👇️ handle dynamic path */}
          {/**          <Route path="/users/:userId" element={<AllPokemons />} /> */}
          <Route path="/" element={<PageHome />} />
          {/* 👇️ only match this when no other routes match */}
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found </h2>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
