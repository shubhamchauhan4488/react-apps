import axios from 'axios'

/** docs: https://rapidapi.com/Glavier/api/imdb146 
 *  X-RapidAPI-Key: when signed in using gmail, auto generated
*/
export const fetchMovies = async (searchText) => {
    const options = {
        method: 'GET',
        url: 'https://imdb146.p.rapidapi.com/v1/find/',
        params: {query: `${searchText}`},
        headers: {
          'X-RapidAPI-Key': '13a7446400mshc36b019300cd430p1a56bejsn67dc8eb83210',
          'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          // console.log(response.data);
          return response.data
      } catch (error) {
          console.error(error);
      }
}
