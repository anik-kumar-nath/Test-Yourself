import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Quiz.css'

const Quiz = ({ index, question, answer, options }) => {
    const [RadioValue, setRadioValue] = useState();
    const [Answer, setAnswer] = useState();

    useEffect(() => {
        if (RadioValue) {
            RadioValue === Answer ? correct() : wrong();
        }
    }, [RadioValue, Answer]);

    const handleRadioChange = (e, ans) => {
        setRadioValue(e.target.value);
        setAnswer(ans);
        console.log(e.target.value, "||||", ans);
    };


    const information = (Answer) => toast.info(Answer, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    // const Answer = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, dolorem adipisci quaerat nemo tenetur magni fugiat blanditiis. itecto voluptatibus animi.";
    const correct = () => toast.success('😊 WoW Correct!!!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const wrong = () => toast.error('😔 Wrong Answer!!!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    return (
        <div>
            <ToastContainer />
            <div className="quiz-body container p-3 rounded border border-success p-2 mb-2 border-opacity-75">
                <div className="d-flex justify-content-between align-items-center p-2 mx-3">
                    <div>
                        <strong>Quiz-{index}.</strong> <code>{question}</code>
                    </div>
                    <div> <strong onClick={() => information(answer)} className='show-answer mx-2'>@</strong></div>
                </div>
                <div className="container">
                    <div className="form-check options">
                        {
                            options.map((option, index1) =>
                                <>
                                    <label className="form-check-label option" htmlFor={`option-${index}-${index1 + 1}`}  >
                                        <input onClick={(e) => { handleRadioChange(e, answer) }} className="form-check-input" type="radio" name={`option-${index}`} id={`option-${index}-${index1 + 1}`} value={option} />
                                        <code>{option}</code>
                                    </label>
                                </>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;