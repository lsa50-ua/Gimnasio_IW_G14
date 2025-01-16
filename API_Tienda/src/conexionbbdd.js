/*import mysql from 'mysql';

export var conexionbbdd = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'machotes123',
  database: 'practica2iw',
});*/

import pkg from 'pg'; // Incompatibilidad
const { Pool } = pkg;


// Configura las credenciales de conexión
export const conexionbbdd = new Pool({
  user: 'postgres.snuzpjwolxlygxasqfwp', // Usuario de la base de datos
  host: 'aws-0-eu-central-1.pooler.supabase.com', // Dirección del host
  database: 'postgres', // Nombre de la base de datos
  password: 'boXzfjOgLtGTwPVp', // Contraseña de la base de datos
  port: 5432, // Puerto (por defecto, 5432)
  });