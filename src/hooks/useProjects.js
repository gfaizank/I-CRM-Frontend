import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext"; 

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { user } = useAuthContext();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/project/`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                setProjects(data.data.projects);
            } catch (error) {
                setError(error.message);
                console.error("Failed to fetch projects", error);
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchProjects();
        }
    }, [user]);

    return { projects, loading, error };
};
