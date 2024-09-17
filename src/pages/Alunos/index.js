import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styled';
import { FaUserCircle, FaWindowClose, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('/alunos');
        console.log(response.data);
        setAlunos(response.data);
      } catch (error) {
        console.error('Erro ao buscar alunos:', error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Container>
        Alunos
        <AlunoContainer>
          {alunos.map((aluno) => (
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

              <Link to={`/aluno/${aluno.id}/delete`}>
                <FaWindowClose size={16} />
              </Link>
            </div>
          ))}
        </AlunoContainer>
      </Container>
    </>
  );
}
