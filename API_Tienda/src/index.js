import express from 'express';
import dotenv from 'dotenv';

import morgan from 'morgan';
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();



// Middleware
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas importadas desde el archivo api.js
import router from './routes/api.js';
app.use(router);

// Conexión a la base de datos
import {conexionbbdd} from './conexionbbdd.js';

conexionbbdd.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log('Conexión correcta con la base de datos.');
    }
});

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

