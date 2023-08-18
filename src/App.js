import React from "react";
import Routes from "../src/routes";
import Favorites from "./pages/Favorites/Favorites";
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
  return (
      <div>
        <Favorites/>
      </div>

  );
}

export default App;
