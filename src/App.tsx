import React from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";

function App(props: any): JSX.Element {
  const { state } = React.useContext(Store);
  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episodes!!</p>
        </div>
        <div style={{ marginRight: "50px" }}>
          <Link to="/" style={{ display: "block" }}>
            Home
          </Link>
          <br />
          <Link to="/faves">
            Favourite(s): {state.favourites ? state.favourites.length : 0}
          </Link>
        </div>
      </header>
      {props.children}
    </>
  );
}

export default App;
