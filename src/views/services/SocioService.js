import axios from 'axios';

const SOCIO_BASE_REST_API_URL="http://localhost:8080/socio";

class SocioService{

    getAllSocio(){
       return axios.get(SOCIO_BASE_REST_API_URL);

    }
}


export default new SocioService();