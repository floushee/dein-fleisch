import React from 'react';
import Container from 'react-bootstrap/Container';
import { withNamespaces } from 'react-i18next';

function About({t}) {
    return (
        <Container className="mt-4">
            <h3>{t('Menu About')}</h3>
        </Container>
    );
}

export default withNamespaces()(About);
