import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  margin-top: auto;
  border-top: 2px solid ${({theme}) => theme.color4};
`