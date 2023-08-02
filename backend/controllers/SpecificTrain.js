const axios = require('axios');
const GetToken = require("./GetToken");

async function SpecificTrain(req, res) {
  try {
    const token = await GetToken();
    const trainId =req.params.id
    console.log(trainId)
    const apiUrl = `http://20.244.56.144/train/trains/${trainId}`;
    const headers = {
      Authorization: `Bearer ${token}`, 
    };

    const response = await axios.get(apiUrl, { headers });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching train data:', error.message);
    res.status(500).json({ error: 'Error' });
    
  }
}

module.exports = SpecificTrain;
