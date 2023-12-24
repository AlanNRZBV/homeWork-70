import axios from "axios";

const axiosAPI = axios.create({
  baseURL:
    'https://alan-noruzbaev-js-20-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default axiosAPI;


