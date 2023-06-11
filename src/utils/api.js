import axios from 'axios';

//this is base url find from video because in our account it didn't found
const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers ={
    Authorization: 'Bearer ' + TMDB_TOKEN,
}

// create a method to fetch api
 export const fetchDataFromApi = async(url, params)=>{
    try {
        const {data} = await axios.get(BASE_URL + url, {headers : headers, params : params,})
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
           
}