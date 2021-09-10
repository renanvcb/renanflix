import React from 'react';
import PageDefault from '../../components/PageDefault';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function NotFound() {
    return (
        <PageDefault>
            <Main>
                <iframe title='Not found' src="https://c.tenor.com/_BiwWBWhYucAAAAM/what-huh.gif" width="480" height="204" frameBorder="0" class="giphy-embed" allowFullScreen />
                <h1 style={{ color: 'white' }}>Página não encontrada</h1>
            </Main>
        </PageDefault>
    )
}

export default NotFound;
