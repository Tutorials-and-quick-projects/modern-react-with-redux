import axios from 'axios';

const KEY = 'AIzaSyCXlXufxcjTBrl2V5D7S0SPOz4E52aPh4c';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
});
