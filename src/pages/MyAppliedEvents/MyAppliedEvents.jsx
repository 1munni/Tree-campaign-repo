import React, { Suspense, use } from 'react';
import Applicationlist from './Applicationlist';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { myApplicationPromise } from '../../api/ApplicationsApi';



const MyAppliedEvents = () => {
    const {user}=use(AuthContext);
    return (
        <div>
            <Suspense fallback={'loading applications'}>
                <Applicationlist
                
                myApplicationPromise={myApplicationPromise(user.email)}
                ></Applicationlist>
            </Suspense>
        </div>
    );
};

export default MyAppliedEvents;