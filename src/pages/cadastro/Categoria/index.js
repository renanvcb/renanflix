import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setCategories([...categories, values]); // ... tras todos os valores anteriores
    clearForm();
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
      <h1>Nova categoria:</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título da Categoria"
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
        <Button style={{ background: 'var(--primary)' }}>Cadastrar</Button>
        <Button type="reset" onClick={clearForm} style={{ background: 'var(--blackLighter)' }}>Limpar</Button>
      </form>

      {console.log(categories)}

      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.title}
          </li>
        ))}
      </ul>

      {/* <table>
        <therad>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Editar</th>
            <th>Remover</th>
          </tr>
        </therad>
        <tbody>
          {categories.map((category) => (
            <tr>
              <td key={category.id}>
                {category.title}
              </td>
              <td>
                {category.description}
              </td>
              <td>
                Editar
              </td>
              <td>
                Remover
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <Link to="/">
        Voltar para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
