import axios from "axios";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_AUTH_TOKEN
    }
  };

export const getMovies = async () => {
    
    try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular", options);
        if (response.status !== 200) {
            throw new Error("An error occured while getting the movies.");
        }
        const data = await response.data.results;
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getMovie = async (id) => {
    console.log("YO")
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, options);
        if (response.status !== 200) {
            throw new Error("An error occured while getting the movies.");
        }
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const searchMovies = async (title) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${title}`, options);
        if (response.status !== 200) {
            throw new Error("An error occured while getting the movies.");
        }
        const data = await response.data;
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

