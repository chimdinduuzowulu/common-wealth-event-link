import { useState } from "react";

import QRcodeGenerator from "./components/QRcodeGenerator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <QRcodeGenerator />
    </>
  );
}

export default App;
