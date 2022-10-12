import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {

    const Topics_data = useLoaderData();
    return (
        <div className="page-decoration">
            <div className="banner">
                <img className='img-fluid rounded-circle' src="https://as2.ftcdn.net/v2/jpg/02/87/32/35/1000_F_287323520_v9fstjqruSwmnJsPRM0HR726E79lm1UX.jpg" alt="" />
                <h1 className='fs-1 bolder'>
                    ONLINE QUIZ
                </h1>
                <strong><small>"Quizzes encourage pupils' self-awareness of progress and self-assessment. By taking quizzes, pupils get instant feedback on their responses. And this can help you to identify areas you need to develop yourself and highlight progress for them to be proud of."</small></strong>
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