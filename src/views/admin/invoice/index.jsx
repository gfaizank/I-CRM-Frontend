import React from 'react';
import { useAuthContext } from 'hooks/useAuthContext';

const Invoice = () => {

    const { user }=useAuthContext()
    
    return (
        <div className='mt-3 grid'>
            {user && (
            <h1>Coming Soon</h1>
            )}

            {!user && (
                <div className='text-xl'>You Must Login first to view records</div>
            )}
        </div>
    );
}

export default Invoice;
