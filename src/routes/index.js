import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Alunos />} />
      <Route path="/aluno" element={<Aluno />} />
      <Route path="/aluno/:id/edit" element={<Aluno />} />
      <Route path="/foto" element={<Fotos />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Page404/>} />
    </Routes>
  );
}
