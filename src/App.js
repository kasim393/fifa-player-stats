import './App.css';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
