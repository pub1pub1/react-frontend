import React, { useState } from 'react';
import { createTutorial } from '../services/tutorialService';

function TutorialForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState(0);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createTutorial({ id, title, description, published: false });
            setId(0);
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Failed to add tutorial:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>ID:</label>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </div>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Add Tutorial</button>
        </form>
    );
}

export default TutorialForm;