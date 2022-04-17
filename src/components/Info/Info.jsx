import React from "react";
import PropTypes from 'prop-types';

const Info = ({ weight, height, id, date, bmi, deleteCard}) => {
    const handleDelete = () => {
        deleteCard(id);
    }

    return (
        <div className="col m6 s12">
            <div className="card">
                <div className="card-content">
                    <span className="card-title" data-testid="bmi-value">
                        BMI: {bmi}
                    </span>
                    <div className="card-data">
                        <span data-testid="weight-value">Weight: {weight} kg</span>
                        <span data-testid="height-value">Height: {height} cm</span>
                        <span data-testid="date-value">Date: {date}</span>
                    </div>

                    <button className="delete-btn" onClick={handleDelete}>X</button>
                </div>
           </div>
        </div>
    );
};

Info.PropTypes = {
    weight: PropTypes.string,
    height: PropTypes.string,
    id: PropTypes.string,
    date: PropTypes.string,
    bmi: PropTypes.string,
    deleteCard: PropTypes.func
};

export default Info;