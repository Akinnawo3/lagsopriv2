/**
 * Rct Page Loader
 */
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const RctPageLoader = () => (
    <div className="page-loader d-flex justify-content-center mb-30" style={{height: '100vh'}}>
        <CircularProgress />
    </div>
);

export default RctPageLoader;
