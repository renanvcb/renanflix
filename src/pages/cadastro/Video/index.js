import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <PageDefault>
            <h1 style={{color: 'var(--primary)'}}>Novo vídeo</h1>

            <Link to='/cadastro/categoria'>
                Cadastrar categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;