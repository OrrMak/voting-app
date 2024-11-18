import axios from 'axios';

async function updateAllUsers() {
    const baseURL = 'https://673894694eb22e24fca858dd.mockapi.io/api/UsersVotingInfo'; //

    for (let i = 1; i <= 15; i++) {
        const updatedData = {
            email: `fake${i}${i}email${i}@projects.com`,
            password: `${i}${i}fake${i}${i}password${i}`,
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