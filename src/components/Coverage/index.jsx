import React from 'react';

const Coverage = (props) => {
    const { name, jobType } = props;

    if (!name) {
        return null;
    }

    return (
        <p>{`Hi my name is ${name} and I'm a ${jobType}`}</p>
    )
}

export default Coverage;
