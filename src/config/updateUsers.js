import axios from 'axios';

async function updateAllUsers() {
    const baseURL = 'https://your-mockapi-url.com/users'; // Replace with your actual MockAPI endpoint.

    for (let i = 1; i <= 15; i++) {
        const updatedData = {
            email: `fakeemail${i}@example.com`,
            password: `fakepassword${i}`,
        };

        try {
            const response = await axios.put(`${baseURL}/${i}`, updatedData);
            console.log(`Updated user with ID ${i}:`, response.data);
        } catch (error) {
            console.error(`Error updating user with ID ${i}:`, error.message);
        }
    }
}

updateAllUsers();