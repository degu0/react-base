import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { toast } from 'react-toastify';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function AppRoutes() {
  toast.success('Oi, sucesso!');
  toast.error('Oi, erro!');

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Page404/>} />
    </Routes>
  );
}
