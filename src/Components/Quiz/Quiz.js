import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import 'react-toastify/dist/ReactToastify.css';
import Option from '../Option/Option';
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
                    <div> <strong onClick={() => information(answer)} className='show-answer mx-2'> <i className="fa-solid fa-eye"></i> </strong></div>
                </div>
                <div className="container">
                    <div className="form-check options">
                        {
                            options.map((option, index1) => <Option key={index1} index={index} index1={index1} option={option} answer={answer} handleRadioChange={handleRadioChange}></Option>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;