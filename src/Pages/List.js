import * as React from 'react';
import { useEffect, useState } from 'react';

function List() {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    return (
        <div>
            <code>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </code>
        </div>
    );
}

export default List;
