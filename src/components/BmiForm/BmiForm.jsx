import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';

const initialValue = {
    weight: '',
    height: '',
    date: ''
};

const BmiForm = ({ change }) => {
    const[state, setState] = useState(initialValue);

    const handleChange = e => {
        let {value, name} = e.target;
        if (value > 999) {
            value = 999;
        }

        const date = new Date().toLocaleDateString().split(',')[0];
        setState({
            ...state,
            [name]: value,
            date
        });
    };


};

BmiForm.propTypes = {
    change: PropTypes.func.isRequired
};

export default BmiForm;