import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChangeCampo(infosDoEvento) {
    /* SEM COMPONENTE */
    // const { getAttribute, value } = infosDoEvento.target;
    // setValue(
    //     getAttribute('name'),
    //     value
    //     );

    /* COM COMPONENTE */
    const { name, value } = infosDoEvento.target;
    setValue(name, value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChangeCampo,
    clearForm,
  };
}

export default useForm;