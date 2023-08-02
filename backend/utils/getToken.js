const axios = require('axios');
let token = ''; 

async function GetToken() {
  const apiUrl = 'http://20.244.56.144/train/auth';
  const requestData = {
    "CompanyName":"Tomato",
    "ownerName":"siva rami reddy",
    "rollno":"20jr1a4437",
    "ownerEmail":"baramsivarami@gmail.com",
     "clientID": "f1c741ac-221e-400b-af2c-c5b0cd21606c",
      "clientSecret": "bspgheqXXumwlaMk"
}
  try {
    const response = await axios.post(apiUrl, requestData);
    token = response.data.access_token;
    return token; 
  } catch (error) {
    console.error('Error', error.message);
    return null; 
  }
}

module.exports = GetToken;
