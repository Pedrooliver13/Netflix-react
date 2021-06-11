import styled from 'styled-components';
import { MD } from '../../Styles/Breakpoints';

export const FeaturedBackground = styled.section`
  position: relative;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, #050404 30%, transparent 70%);
    padding-bottom: 150px;
    padding-top: 56%;
    left: 0;
    z-index: -1;

    @media (max-width: ${MD}) {
      min-height: 60vh;
    }
  }

  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    background: linear-gradient(to top, #050404 20%, transparent);
    width: 100%;
    height: 40px;
    bottom: 0;
  }
`;

export const FeaturedWrapper = styled.div`
  display: flex;
  align-content: space-between;
  flex-direction: column;
  max-width: 750px;
  padding-top: 15rem;
  padding-left: 2.5rem;
  line-height: 1.5;

  @media (max-width: ${MD}) {
    max-width: 100%;
    padding-top: 8rem;
    padding-left: 1rem;
  }
`;

export const FeaturedTitle = styled.h1`
  font-weight: 800;
  font-size: 3rem;
  @media (max-width: ${MD}) {
    font-size: 1.5rem;
  }
`;

export const FeaturedInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 800;

  p {
    margin-right: 0.6rem;
  }

  .featured__average {
    color: #46d369;
  }
`;

export const FeaturedDescription = styled.p`
  max-width: 65%;
  color: ${({ theme }) => theme.color5};
  font-size: 1.25rem;
  line-height: 1;
  margin: 1.2rem 0;

  @media (max-width: ${MD}) {
    max-width: 70%;
    font-size: 1rem;
  }
`;

export const FeaturedButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;

  button {
    margin-right: 0.5rem;
  }
`;

export const FeaturedGenres = styled.p`
  color: ${({theme}) => theme.color5};
  margin-top: .6rem;

  span {
    font-weight: 800;
  }
`
