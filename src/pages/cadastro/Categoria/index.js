import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const initialValues = {
        name: '',
        description: '',
        color: '#000000'
    }

    const [values, setValues] = useState(initialValues);
    const [categories, setCategories] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        setCategories([...categories, values]); //... tras todos os valores anteriores
        setValues(initialValues)
    }

    // function handleChange(e) {
    //     setValue(e.target.getAttribute('name'), e.target.value)
    // }
    function handleChange(e) {
        const { name, value } = e.target;
        setValue(name, value);
    }

    //key is a dynamic value... It can be "name", or "description" or "color"
    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value, //eg.: name: 'Movies'
        })
    }

    return (
        <PageDefault>
            <h1>Nova categoria: {values.name}</h1>

            <form onSubmit={handleSubmit}>
                <FormField
                    label='Nome da Categoria'
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                />

                <FormField
                    label='Descrição'
                    type='textarea'
                    name='description'
                    value={values.description}
                    onChange={handleChange}
                />

                {/* <div>
                    <label>
                        Descrição: 
                    <textarea
                            type='text'
                            name='description'
                            value={values.description}
                            onChange={handleChange}
                        />
                    </label>
                </div> */}
                <FormField
                    label='Cor'
                    type='color'
                    name='color'
                    value={values.color}
                    onChange={handleChange}
                />
                <button>Cadastrar</button>
            </form>

            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        {/* {`${category.name} | ${category.description} | ${category.color}`} */}
                        {category.name}
                    </li>
                ))}
            </ul>

            <Link to='/'>
                Voltar para a Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;