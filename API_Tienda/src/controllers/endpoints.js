import { verCategorias } from "../repository/categorias.js";

export async function obtenerEstadoPedido(id){
    return await verCategorias();
}

// Nuevo endpoint para obtener productos
export async function obtenerProductos(req, res) {
    try {
        const productos = await verCategorias(); // Aquí deberías llamar a la función adecuada para obtener productos
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos' });
    }
}