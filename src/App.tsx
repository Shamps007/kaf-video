import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Cervejaria } from "./pages/Cervejaria";
import { Catalogo } from "./pages/Catalogo";
import { Bebidas } from "./pages/Bebidas";
import { Contato } from "./pages/Contato";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/cervejaria" element={<Cervejaria />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/bebidas" element={<Bebidas />} />
          <Route path="/contato" element={<Contato />} />
          {/* Fallback for any other routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
