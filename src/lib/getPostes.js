import {CONSTANTS} from "../constants"

import axios from "axios"


const  getPost = async() => {
    const response = await axios.get(CONSTANTS.URLS.POST_API);
    console.log(response.data)
    return response.data
};

export default getPost;