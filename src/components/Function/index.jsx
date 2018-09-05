import React from 'react';

export const makeUppercase = (input) => (input.charAt(0).toUpperCase() + input.slice(1));

const Function = (props) => {
    const { name, surname, jobType } = props;

    return (
        <p>{`Hi my name is ${makeUppercase(name)} ${makeUppercase(surname)} and I'm a ${jobType}`}</p>
    )
}

export default Function;
