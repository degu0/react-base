import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, NovoAluno, ProfilePicture } from './styled';
import {
  FaUserCircle,
  FaWindowClose,
  FaEdit,
  FaExclamation,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('/alunos');
        setAlunos(response.data);
      } catch (error) {
        console.error('Erro ao buscar alunos:', error);
      }
    }
    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();

    try {
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('Voe precisa fazer login');
      } else {
        toast.error('Ocorreu um erro ao excluir aluno');
      }
    }
  };

  return (
    <>
      <Container>
        <h1>Alunos</h1>
        <NovoAluno to="/aluno/">Novo Aluno</NovoAluno>
        <AlunoContainer>
          {alunos.map((aluno, index) => (
            <div key={String(aluno.id)}>
              <ProfilePicture>
                {get(aluno, 'Fotos[0].url', false) ? (
                  <img src={aluno.Fotos[0].url} alt="" />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </ProfilePicture>

              <span>{aluno.nome}</span>
              <span>{aluno.email}</span>

              <Link to={`/aluno/${aluno.id}/edit`}>
                <FaEdit size={16} />
              </Link>

              <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
                <FaWindowClose size={16} />
              </Link>

              <FaExclamation
                size={16}
                display="none"
                cursor="pointer"
                onClick={(e) => handleDelete(e, aluno.id, index)}
              />
            </div>
          ))}
        </AlunoContainer>
      </Container>
    </>
  );
}
