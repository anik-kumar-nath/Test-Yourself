import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizzes = () => {
    const quiz = useLoaderData();
    return (
        <div>
            <h1>Name: {quiz.data.name} and total:  {quiz.data.total}</h1>
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
            }
        </div>
    );
};

export default Quizzes;