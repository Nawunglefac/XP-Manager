const axios = require('axios');

const accumulateXP = async (xp) => {
    try {
        const response = await axios.post('http://localhost:3000/accumulate-xp', { xp });
        console.log('Accumulate XP Response:', response.data);
    } catch (error) {
        console.error('Error accumulating XP:', error.response ? error.response.data : error.message);
    }
};

const getCurrentLevel = async () => {
    try {
        const response = await axios.get('http://localhost:3000/current-level');
        console.log('Current Level Response:', response.data);
    } catch (error) {
        console.error('Error getting current level:', error.response ? error.response.data : error.message);
    }
};

const testMicroservice = async () => {
    await accumulateXP(150);
    await getCurrentLevel();
};

testMicroservice();
