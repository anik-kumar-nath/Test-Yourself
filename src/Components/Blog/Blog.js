import React from 'react';
import Post from '../Post/Post';

const Blog = () => {
    const QA = [
        {
            question: "What is the purpose of React Router?",
            answer: "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL."
        },
        {
            question: "How context api works?",
            answer: "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to 'prop drilling' or moving props from grandparent to child to parent, and so on."
        },
        {
            question: "What is a useRef in React?",
            answer: "The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object."
        }
    ];
    return (
        <div className='container'>
            {
                QA.map((item, index) => <Post key={index} index={index + 1} question={item.question} answer={item.answer}></Post>)
            }
        </div>
    );
};

export default Blog;