import React, { useEffect, useState } from 'react';
import { getTutorials } from '../services/tutorialService';

function TutorialList() {
    const [tutorials, setTutorials] = useState([]);

    // Function to fetch tutorials
    const fetchTutorials = async () => {
        try {
            const response = await getTutorials();
            setTutorials(response);
        } catch (error) {
            console.error('Failed to fetch tutorials:', error);
        }
    };

    useEffect(() => {
        fetchTutorials();
    }, []);

    return (
        <div>
            <h2>Tutorials</h2>
            <ul>
                {tutorials.map(tutorial => (
                    <li key={tutorial.id}>{tutorial.title} - {tutorial.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default TutorialList;