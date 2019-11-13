import React from 'react';
import cl from './Header.module.css';

const Header = () => {
    return <header className={cl.general}>
        <img className={cl.logo}
             src='https://www.clipartmax.com/png/full/270-2703019_pictures-gallery-of-company-logos-design-free-logo-design-3d-png.png'
             alt="logo"/>

    </header>
}

export default Header;