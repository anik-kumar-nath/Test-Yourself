import React from 'react';

const Post = ({ index, question, answer }) => {
    return (
        <div className="bg-light text-success rounded p-3 my-2 text-start shadow border border-primary">
            <h4><strong>{index}</strong>. {question}</h4>
            <p className='text-secondary'><strong>Answer:</strong> {answer}</p>
        </div>
    );
};

export default Post;