import React from 'react';
import { SelectBase } from './style';
import PropTypes from 'prop-types';

function Select({ name, dados, onChange }){
    return (
        <SelectBase name={name} onChange={onChange}>
        {dados.map((item, indice) => (
            <option key={item.id} value={item.id}>{item.titulo}</option>
        ))}
        </SelectBase>
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