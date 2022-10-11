import React from 'react';
import './Topic.css'

const Topic = ({ topic }) => {
    return (
        <div className='topic'>
            <img src={topic.logo} alt="" />
            <div className='d-flex justify-content-between align-items-center bg-light rounded p-1'>
                <h5>{topic.name}</h5>
                <h5>{topic.total}</h5>
                <button className='btn btn-primary' >goto test</button>
            </div>
        </div>
    );
};

export default Topic;