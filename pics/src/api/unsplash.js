import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID c24ea9c9e3a9b9cee8eeb344f8a45164cd753acee304337284cf379d35e9cd95'
  }
});
