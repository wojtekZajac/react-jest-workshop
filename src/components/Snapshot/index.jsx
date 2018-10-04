import React from 'react';

const Snapshot = ({name, jobType}) => {
    return (
        <div>
            <p>Snapshot testing</p>
            <p>{`Hi my name is ${name} and I'm a ${jobType}`}</p>
        </div>
    )
}

export default Snapshot;
