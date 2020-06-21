import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons/'

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <Navbar fixed="bottom" bg="light">
            <FontAwesomeIcon icon={faCopyright} className="mr-1"/>
            <a className="mr-1" href="mailto:dominik.deutsch@gmail.com">Dominik Deutsch</a>
            2020-{currentYear}
        </Navbar>
    );
}

export default Footer;
