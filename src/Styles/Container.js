const Container = `
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }


  /* BREAKPOINT 768px */
  @media (max-width: 48em) {
    .container {
      padding-right: 1rem;
      padding-left: 1rem;
    }
  }
  

  /* BREAKPOINT 1200px */
  @media (min-width: 75em) {
    .container {
      max-width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
    }
  }
`;

export default Container;
