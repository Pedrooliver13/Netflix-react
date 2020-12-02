import styled from 'styled-components';
import { MD } from '../../Styles/Breakpoints';

export const LoadingWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 50%;
    width: 100%;
    right: 20px;
    object-fit: contain;

    @media (max-width: ${MD}) {
      max-width: 100%;
    }
  }

`;
