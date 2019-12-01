import axios from 'axios';

export default axios.create({
    baseURL: 'http://33395e4b.ngrok.io/'
    // ngrok cambia su direccion, cada vez que se levanta hay q actualizarla 
    // para que esta app de prueba funcione.
    // 1- en una terminal : npm run db 
    // 2- en otra terminal: npm run tunnel (aca esta la url)

})