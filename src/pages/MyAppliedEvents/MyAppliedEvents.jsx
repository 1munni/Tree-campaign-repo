import React, { Suspense, use } from 'react';
import Applicationlist from './Applicationlist';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { myApplicationPromise } from '../../api/ApplicationsApi';



const MyAppliedEvents = () => {
    const {user}=use(AuthContext);

    console.log('TOKEN in the context',user.accessToken)
    return (
        <div>
            <Suspense fallback={'loading applications'}>
                <Applicationlist
                
                myApplicationPromise={myApplicationPromise(user.email,user.accessToken)}
                ></Applicationlist>
            </Suspense>
        </div>
    );
};

export default MyAppliedEvents;