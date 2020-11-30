import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { SM } from '../../Styles/Breakpoints';

export const Menu = styled.header`
  position: fixed;
  max-width: 100%;
  width: 100%;
  top: 0;
  z-index: 100;
  background-color: ${({ theme, black }) => black ? theme.color5 : "none"};
  color: ${({theme}) => theme.color3};
  transition: .4s ease-in-out;
`;

export const MenuWrapper = styled.div`
  position:  relative;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 2rem;

  @media (max-width: ${SM}) {
    justify-content: center;
  }
`; 

export const MenuLogo = styled(Link)`
  padding: 1rem 0;
`;

export const MenuLogin = styled.div`
  @media(max-width: ${SM}) {
    display: none;
  }
`;