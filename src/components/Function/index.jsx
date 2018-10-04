import React from 'react';

export const makeFirstLetterUppercase = (input) => (input.charAt(0).toUpperCase() + input.slice(1));

const Function = (props) => {
    const { name, surname, jobType, onClickHandler } = props;

    return (
        <div>
            <p>
            {
                `I'm a smart component and I make name and surname uppercase!
                Hi, I'm a ${makeFirstLetterUppercase(name)} ${makeFirstLetterUppercase(surname)} and I'm a ${jobType}`
            }
            </p>
            <a onClick={onClickHandler(name)}>Click me</a>
        </div>

    )
}

export default Function;
