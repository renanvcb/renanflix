import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    title: '',
    description: '',
    color: '#000000',
  };

  const [values, setValues] = useState(initialValues);
  const [categories, setCategories] = useState([]);

  function setValue(key, value) {
    // key is a dynamic value... It can be "name", or "description" or "color"
    setValues({
      ...values,
      [key]: value, // eg.: name: 'Movies'
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValue(name, value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategories([...categories, values]); // ... tras todos os valores anteriores
    setValues(initialValues);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:3333/categories'
      : 'https://renanborgesflix.herokuapp.com/categories';
    fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategories([
          ...response,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Nova categoria:
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título da Categoria"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        <Button style={{ background: 'var(--black)' }}>Cadastrar</Button>
      </form>

      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {/* {`${category.id} | ${category.title} |
             ${category.description} | ${category.color}`} */}
            {category.title}
          </li>
        ))}
      </ul>

      <Link to="/">
        Voltar para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
