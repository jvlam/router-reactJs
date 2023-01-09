import axios from '../utils/axiosCustomize';

const postCreateUser = (email, password, userName, role, avatar) => {
    const FormData = require('form-data');
    const param = new FormData();
    param.append('email', email);
    param.append('password', password);
    param.append('username', userName);
    param.append('role', role);
    param.append('userImage', avatar);

    return axios.post('/api/v1/participant', param);
}

export { postCreateUser }