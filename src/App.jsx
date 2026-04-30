import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ToolKit from "./pages/ToolKit";
import Contacto from "./pages/Contacto";
import Servicios from "./pages/Servicios";
import Proceso from  "./pages/Proceso";
import Proyectos from "./pages/Proyectos";

// placeholders mientras creamos las demás


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/toolkit" element={<ToolKit />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/proceso" element={<Proceso />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}
  

