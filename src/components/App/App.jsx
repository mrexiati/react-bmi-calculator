import React, { useState, useEffect } from 'react';
import Bar from '../Bar/Bar';
import BmiForm from '../BmiForm/BmiForm';
import Info from '../Info/Info';
import { getData, setData } from '../../helpers/localStorage';
import { v4 as uuidv4 } from 'uuid';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

const App = () => {
    const initialState = () => getData('data') || [];
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    useEffect(
        () => {
            storeData('data', state);
            const date = state.map(obj => obj.date);
            const bmi = state.map(obj => obj.bmi);
            let newData = {date, bmi};
            setData(newData);
        }, [state]
    );

    const handleChange = vale => {
        let heightInM = val.height / 100;
        val.bmi = (val.weight / (val.heightInM * val.heightInM)).toFixed(2);
        val.id = uuidv4();
        let newVal = [...state, val];
        let len = newVal.length;
        if (len > 7)
            newVal = newVal.slice(1, len);
        setState(newVal);
    };

    







}

export default App;
