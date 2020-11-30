import React from 'react';
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
      <MenuWrapper>
        <MenuLogo to="/">
          <Logo />
        </MenuLogo>

        <MenuLogin>Login</MenuLogin>
      </MenuWrapper>
    </Menu>
  );
};

export default Header;
