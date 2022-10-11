import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quiz = useLoaderData();
    return (
        <div className='container'>
            {/* <h1>Name: {quiz.data.name} and total:  {quiz.data.total}</h1>
            {
                quiz.data.questions.map((data, index) => <div><h1>{index + 1}</h1><code>{data.question}</code>
                    <p>Correct Answer: {data.correctAnswer}</p>
                    <ol>
                        {
                            data.options.map(option => <li><code>{option}</code></li>)
                        }
                    </ol>
                </div>
                )
            } */}
            <h1 className='text-center m-3 bolder'>{quiz.data.name}</h1>
            <strong className='p-3 m-3 bg-success text-warning rounded-circle'>{quiz.data.total}</strong>
            {quiz.data.questions.map((data, index) => <Quiz key={index} index={index + 1} question={data.question} answer={data.correctAnswer} options={data.options}></Quiz>)}
        </div>
    );
};

export default Quizzes;