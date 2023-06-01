import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <img src="https://i.ibb.co/bR0SJ52/404.jpg" alt="" />
            <div className='absolute bottom-2/4 left-2/4'>
                <Link to="/" className='border border-orange-400 bg-yellow-200 rounded-lg px-5 py-2 text-xl font-semibold'>Go to Home</Link>
            </div>
        </div>
    );
};

export default Error;