const Container = `
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  /* BREAKPOINT 576px */
  @media (min-width: 36em) {
    .container {
      max-width: 540px;
    }
  }

  /* BREAKPOINT 768px */
  @media (min-width: 48em) {
    .container {
      max-width: 720px;
    }
  }

  /* BREAKPOINT 992px */
  @media (min-width: 62em) {
    .container {
      max-width: 960px;
    }
  }

  /* BREAKPOINT 1200px */
  @media (min-width: 75em) {
    .container {
      max-width: 1920px;
    }
  }
`;

export default Container;
