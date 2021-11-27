import React from "react";
import "../common/styles/index.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../client/apollo-client";
import Dashboard from "./Dashboard";

function App() {
  return (
    <ApolloProvider client={client as any}>
      <div className="App">
        <Dashboard />
      </div>
    </ApolloProvider>
  );
}

export default App;
