import styled from 'styled-components';

export const ButtonElement = styled.button`
  background-color: ${({ theme, color }) =>
    color === 'primary' ? theme.color3 : theme.color4};
  color: ${({ theme, color }) =>
    color === 'primary' ? theme.color4 : theme.color3};

  min-width: 100px;
  min-height: 40px;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1.1rem;

  border: none;
  border-radius: 0.2rem;
  outline: 0;
  cursor: pointer;
  transition: all 0.5s;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 2px #a8a7a7, 0px 0px 0px 3px #fff;
  }
`;
