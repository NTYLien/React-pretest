import React from 'react';
import { useSearchParams } from 'react-router-dom';

function NotFound(props) {
    const params = useSearchParams()
    return (
        <div>
            Not Found {params[0].get('message') || 'Page'}
        </div>
    );
}

export default NotFound;