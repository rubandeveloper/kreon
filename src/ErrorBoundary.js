import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (hasError) {
            setTimeout(() => {
                window.location.reload();
            }, 0);
        }
    }, [hasError]);

    if (hasError) {
        return <div>Oops! Something went wrong. Reloading the page...</div>;
    }

    return children;
};

export default ErrorBoundary;
