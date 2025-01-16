import { parse } from 'dotenv';
import  { verCategorias, getProductByCategoryId,  anadirCategoria, eliminarCategoria, modificarCategoria, anadirSubCategoria, eliminarSubCategoria, modificarSubCategoria, verSubCategoriade, getProductByCategoryName, getProductBySubcategoryId } from '../repository/categorias.js';
import { loginUsuario, registrarUsuario, modificarUsuario, obtenerUsuario, obtenerHistoricoPedidos, obtenerEstadoPedido, obtenerCarrito, anadirProductoCarrito, eliminarProductoCarrito } from '../repository/cliente.js';
import { Router } from 'express';
const router = Router(); 



// getCategories
router.get('/categories', async (req, res) => {
    const categorias = await verCategorias();
    console.log(categorias);
    res.json(categorias);
});

// getProductByCategory id
router.get('/products/search/:id_cat', async (req, res) => {
    const id_cat = req.params.id_cat;
    const productos = await getProductByCategoryId(parseInt(id_cat));
    console.log(productos);
    res.json(productos);
});

// getProductsByCategoryName
router.get('/categories/search/:name', async (req, res) => {
    const name = req.params.name;
    const productos = await getProductByCategoryName(name);
    console.log(productos);
    res.json(productos);
});

router.get('/', (req, res) => {
    res.json({message: 'Bienvenido a la API de la tienda'});
});



// endpoints.getSubcategoriesByCategoryId
router.get('/subcategories/search/:id_cat', async (req, res) => {
    const id_cat = req.params.id_cat;
    const productos = await verSubCategoriade(parseInt(id_cat));
    res.json(productos);
});

// endpoints.getProductsBySubcategoryId
router.get('/subcategories/search/:id_subcat/products', async (req, res) => {
    const id_subcat = req.params.id_subcat;
    const productos = await getProductBySubcategoryId(parseInt(id_subcat));
    res.json(productos);
});



export default router;
