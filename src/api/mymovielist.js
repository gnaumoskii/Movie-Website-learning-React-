import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:3500/",
});

//Add movies to My Movies List
export const addMyMovie = async (movie) => {
    try {
        await api.post("http://localhost:3500/mymovielist", movie);
    } catch (error) {
        console.log(error);
    }
};

//Remove movie from My Movie List
export const removeMyMovie = async (id) => {
    try {
        await api.delete(`./mymovielist/${id}`);
    } catch (error) {
        console.log(error);
    }
};

export const getMyMovies = async () => {
    try {
        const response = await api.get("http://localhost:3500/mymovielist");
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getMyMovie = async (id) => {
    try {
        const response = await api.get(`http://localhost:3500/mymovielist/${id}`);
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
