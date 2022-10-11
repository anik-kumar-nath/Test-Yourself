import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {

    const Topics_data = useLoaderData();
    return (
        <div className="page-decoration">
            <div className="banner">
                <h1>
                    ONLINE QUIZ
                </h1>
                <small>Test Yourself</small>
            </div>
            <div className='topics-decoration container-fluid px-md-3 px-0'>
                {
                    Topics_data.data.map((data, index) => <Topic key={index} topic={data}></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;