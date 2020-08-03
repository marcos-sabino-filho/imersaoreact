import React, { useState } from 'react';
import { FormFieldWrapper, Label, SelectBase } from './style';
import PropTypes from 'prop-types';

function Select({ label, name, dados, onChange }){

    const [valorSelecionado, SelecionarValor] = useState(0);

    function Selectionar(evento){
        SelecionarValor(evento.target.value);
        onChange(evento);
    }

    return (
    <FormFieldWrapper>
        <Label>
            <SelectBase name={name} onChange={Selectionar} value={valorSelecionado}>
                {dados.map((item) => (
                    <option key={item.id} value={item.id}>{item.titulo}</option>
                ))}
            </SelectBase>
            <Label.Text>
                {label}
            </Label.Text>
        </Label>
    </FormFieldWrapper>

        
    );
}

Select.defaultProps = {
    name: '',
    dados: []
};

Select.propTypes = {
    name: PropTypes.string.isRequired, 
    dados: PropTypes.array.isRequired,
};

export default Select;