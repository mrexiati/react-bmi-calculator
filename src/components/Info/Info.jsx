import React from "react";
import PropTypes from 'prop-types';

const Info = ({ weight, height, id, date, bmi, deleteCard}) => {
    const handleDelete = () => {
        deleteCard(id);
    }

    return (
        <div className="col m6 s12">
            <div className="card">
                <div className="">
                    <span className="">
                        BMI: {bmi}
                    </span>
                    <div className="">
                        <span>Weight: {weight}</span>
                        <span>Height: {height}</span>
                        <span>Date: {date}</span>
                    </div>

                    <button className="" onClick={handleDelete}>X</button>
                </div>
           </div>
        </div>
    );
};

export default Info;