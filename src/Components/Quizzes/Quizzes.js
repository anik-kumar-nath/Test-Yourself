import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quiz = useLoaderData();
    return (
        <div className='container'>
            <h1 className='text-center m-3 bolder'>{quiz.data.name}</h1>
            <strong className='p-3 m-3 bg-success text-warning rounded-circle'>{quiz.data.total}</strong>
            {quiz.data.questions.map((data, index) => <Quiz key={index} index={index + 1} question={data.question} answer={data.correctAnswer} options={data.options}></Quiz>)}
        </div>
    );
};

export default Quizzes;