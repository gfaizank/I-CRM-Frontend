import React from 'react';
import PeopleTable from './components/PeopleTable';
import { useAuthContext } from 'hooks/useAuthContext';

const People = () => {

    const { user }=useAuthContext()
    
    return (
        <div className='mt-3 grid'>
            {user && (
            <PeopleTable />
            )}

            {!user && (
                <div className='text-xl'>You Must Login first to view records</div>
            )}
        </div>
    );
}

export default People;
