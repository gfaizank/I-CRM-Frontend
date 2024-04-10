import React from 'react';
import { useAuthContext } from 'hooks/useAuthContext';
import ClientTable from './components/ClientTable';

const Client = () => {

    const { user }=useAuthContext()
    
    return (
        <div className='mt-3 grid'>
            {user && (
            <ClientTable />
            )}

            {!user && (
                <div className='text-xl'>You Must Login first to view records</div>
            )}
        </div>
    );
}

export default Client;
