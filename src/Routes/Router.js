import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from '../Styles/GlobalStyled';
import Colors from '../Styles/Colors';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Home from '../Page/Home/Home';
import ShowMovie from '../Page/ShowMovie/ShowMovie';
import Page404 from '../Components/Page404/Page404';

const Router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Colors}>
        <GlobalStyled />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<ShowMovie />}/>
          <Route path="*" element={<Page404 />} />
        </Routes>

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
