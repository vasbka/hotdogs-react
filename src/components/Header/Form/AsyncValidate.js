import * as axios from "axios";
const { SERVER_URL} = process.env;

const asyncValidate = (values /*, dispatch */) => {
    return axios
        .post(`${SERVER_URL}/api/hot-dogs/check-name`, {
            name: values.name
        })
        .then(response => {
            if (response.data.isNameExists) {
                throw { name: 'That hot-dog name is taken' }
            }
        })
}

export default asyncValidate;
