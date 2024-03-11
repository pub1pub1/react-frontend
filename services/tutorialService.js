const API_URL = "https://backend-50583.azurewebsites.net/api/tutorials"; // Replace with your .NET API URL

export const createTutorial = async (tutorial) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tutorial)
    });
    return response.json();
};

export const getTutorials = async () => {
    const response = await fetch(API_URL);
    return response.json();
};