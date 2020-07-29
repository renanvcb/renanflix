import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1 style={{color: 'var(--primary)'}}>Nova categoria</h1>

            <form>
                <label>
                    Nome da categoria:
                    <input type="text"/>
                </label>

                <button>Cadastrar</button>
            </form>

            <Link to='/'>
                Voltar para a Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;