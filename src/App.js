import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./exportPaths";
function App() {
  return <div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

    </Routes>
    </BrowserRouter>


  </div>;
}

export default App;
