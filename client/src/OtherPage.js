import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            I some other page!
            <Link to="/">Go back home</Link>
        </div>
    );
}