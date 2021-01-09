import React from 'react';

const Card = (props) => {
    return (
        <div>
            <h4>{props.websiteName}</h4>
            <hr />
            <p>{props.statusCode}</p>
            <p>{props.statusText}</p>
            <p>{props.isDown}</p>
            <p>{props.returnedUrl}</p>
            <p>{props.requestedDomain}</p>
        </div>
    );
};
export default Card;