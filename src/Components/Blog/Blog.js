import React from 'react';
import Post from '../Post/Post';

const Blog = () => {
    const QA = [

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