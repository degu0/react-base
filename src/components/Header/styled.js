import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  width: 100%;
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a {
    color: #fff;
    margin: 0 10x 0 0;
    font-weight: bold;
  }
`;
