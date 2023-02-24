import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const DefaultErrorPage = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>Oops!</h1>
                <h2>{error.status}</h2>
                <p>{error.statusText}</p>
                {error.data?.message && <p>{error.data.message}</p>}
            </div>
        );
    } else {
        return <div>Oops</div>;
    }

    throw error;
};
