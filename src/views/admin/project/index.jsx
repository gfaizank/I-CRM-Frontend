import React from 'react';
import { useAuthContext } from 'hooks/useAuthContext';
import ProjectTable from './components/ProjectTable';

const Project = () => {

    const { user }=useAuthContext()
    
    return (
        <div className='mt-3 grid'>
            {user && (
            <ProjectTable />
            )}

            {!user && (
                <div className='text-xl'>You Must Login first to view records</div>
            )}
        </div>
    );
}

export default Project;
