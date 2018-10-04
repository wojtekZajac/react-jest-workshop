import React from 'react';

const Dot = () => {
    return (
        <span>.</span>
    )
}

const Basic = (props) => {
    const { name, jobType } = props;

    return (
        <p>{`Hi my name is ${name} and I'm a ${jobType}`}<Dot /></p>
    )
}

export default Basic;
