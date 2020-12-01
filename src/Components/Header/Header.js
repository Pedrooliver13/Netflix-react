import React from 'react';
import Button from '../Form/Button/Button';
import { Menu, MenuLogo, MenuWrapper, MenuLogin } from './style';
import { ReactComponent as Logo } from '../../img/logo-netflix.svg';

const Header = () => {
  const [blackHeader, setblackHeader] = React.useState();

  React.useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setblackHeader(true);
      } else {
        setblackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);
  return (
    <Menu black={blackHeader}>
      <MenuWrapper className="container">
        <MenuLogo to="/">
          <Logo />
        </MenuLogo>

        <MenuLogin>
          <Button>
            Login
          </Button>
        </MenuLogin>
      </MenuWrapper>
    </Menu>
  );
};

export default Header;
