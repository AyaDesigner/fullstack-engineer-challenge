import React from "react";
import "../common/styles/index.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../client/apollo-client";

function App() {
  return (
    <ApolloProvider client={client as any}>
      <div className="App">This is fullstack tech challenge</div>
    </ApolloProvider>
  );
}

export default App;
