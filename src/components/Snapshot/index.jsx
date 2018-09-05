import React from 'react';

const Basic = (props) => {
    const { name, jobType } = props;

    return (
        <p>{`Hi my name is ${name} and I'm a ${jobType}`}</p>
    )
}

export default Basic;
