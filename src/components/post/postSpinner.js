import React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
const PostSpinner = () => {
    return (
        <div className="post-spinner-container">
            <Button variant="primary" disabled className="custom-button">
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="spinner"
                />
                Загрузка...
            </Button>
        </div>
    );
};
export default PostSpinner;
