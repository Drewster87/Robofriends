import React from 'react';

const Card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 pa ma2 grow bw2 shadow-5'>
            <div><img src={`https://robohash.org/${props.id}?size=200x200`} alt="" />
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;