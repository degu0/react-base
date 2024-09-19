import React, { useEffect, useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Form, Title } from './styled';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import axios from '../../services/axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import * as actions from '../../store/modules/auth/action';

export default function Fotos() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const [foto, setFoto] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/alunos/${id}`);
        setFoto(get(data, 'Fotos[0].url', ''));
      } catch (err) {
        const message = get(err, 'response.data.message', 'Erro ao obter imagem');
        toast.error(message);
        navigate('/');
      }
    };

    getData();
  }, [id, navigate]);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error('Nenhum arquivo selecionado');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('/fotos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Foto enviada com sucesso!');
    } catch (err) {
      const { status } = get(err, 'response', {});
      toast.error('Erro ao enviar foto.');

      if (status === 401) dispatch(actions.loginFailure());
    }
  };

  return (
    <Container>
      <Title>Fotos</Title>
      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="Foto" /> : <span>Selecionar foto</span>}
          <input type="file" id="foto" style={{ display: 'none' }} onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}
