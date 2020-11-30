import styled from 'styled-components';

export const LoadingWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 600px;
    right: 20px;
    object-fit: contain;
  }

`;
