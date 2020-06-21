import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { withNamespaces } from 'react-i18next';
import i18n from '../i18n';

function Header({t}) {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <Navbar bg="light" expand="lg" variant="light">
            <Navbar.Brand href="/">
            <img src="icon.svg" style={{height: "40px"}} className="mr-2" alt="Website Icon"/>
            {' ' + t('App name')}
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/map">{t('Menu Map')}</Nav.Link>
                    <Nav.Link href="/list">{t('Menu List')}</Nav.Link>
                    <Nav.Link href="/about">{t('Menu About')}</Nav.Link>
                </Nav>
                <NavDropdown title={t('Menu Language')} id="basic-nav-dropdown" size="lg">
                    <NavDropdown.Item onClick={() => changeLanguage('de')}>{t('Menu Language German')}</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => changeLanguage('en')}>{t('Menu Language English')}</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withNamespaces()(Header);
