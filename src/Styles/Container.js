const Container = `
  .container {
    width: 100%;
    padding-right: 3rem;
    padding-left: 3rem;
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
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
  }
`;

export default Container;
