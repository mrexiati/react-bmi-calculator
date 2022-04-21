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

    const handleSubmit = () => {
        change(state);
        setState(initialValue);
    }

    return(
        <>
            <div className="row">
                <div className="col m6 s12">
                    <label htmlFor="weight">Weight (in kg)</label>
                    <input
                    id="weight"
                    name="weight"
                    type="number"
                    min="1"
                    max="999"
                    placeholder="Enter weight in kg"
                    value={state.weight}
                    onChange={handleChange}
                    />
                </div>

                <div className="col m6 s12">
                    <label htmlFor="weight">Height (in cm)</label>
                    <input
                    id="height"
                    name="height"
                    type="number"
                    min="1"
                    max="999"
                    placeholder="Enter height in cm"
                    value={state.height}
                    onChange={handleChange}
                    />
                </div>
            </div>
            <div className="center">
                <button 
                    id="bmi-btn"
                    className="calculate-btn"
                    type="button"
                    disabled={state.weight === '' || state.height === '' || state.weight < 0 || state.height < 0}
                    onClick={handleSubmit}
                >
                    Calculate BMI
                </button>
            </div>
        </>
    );
};

BmiForm.propTypes = {
    change: PropTypes.func.isRequired
};

export default BmiForm;