import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const initialValues = {
    title: '',
    url: '',
    category: '',
  };
  const { handleChange, values, clearForm } = useForm(initialValues);

  useEffect(() => {
    categoriesRepository.getAll()
      .then((serverResponse) => {
        setCategories([
          ...serverResponse,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Novo vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const chosenCategory = categories.find((category) => category.title === values.category);
        // eslint-disable-next-line no-alert
        // Melhorar isto!
        // alert('Vídeo cadastrado com sucesso!');
        videosRepository.create({
          categoryId: chosenCategory.id,
          title: values.title,
          url: values.url,
        })
          .then(() => {
            // console.log('Cadastrado com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit" style={{ background: 'var(--primary)' }}>Cadastrar vídeo</Button>
        <Button type="reset" onClick={clearForm} style={{ background: 'var(--blackLighter)' }}>Limpar</Button>
        <Link to="/cadastro/categoria">
          <Button style={{ background: 'var(--primary)' }}>Nova categoria</Button>
        </Link>
      </form>
    </PageDefault>
  );
}

export default CadastroVideo;
