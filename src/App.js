import React from "react";
import Tweet from "./Components";
import { data } from "./Components/data";
function App() {
  return <Tweet tweet={data} />;
}

export default App;
