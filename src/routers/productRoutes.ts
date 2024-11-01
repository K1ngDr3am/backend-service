import { Router } from "express";
import {
    getAllProducts,
    getproductByID,
    createProduct,
    updateProduct,
    deleteProduct,
}from "../controllers/productcontroller";

const router = Router();

router.get("products/", getAllProducts); // Trae todos los productos
router.get("products/:id", getproductByID); // Trae solo un producto
router.post("products/", createProduct);  // Crear un producto
router.put("products/:id", updateProduct) // Actualizar un producto
router.delete("product/:id", deleteProduct); // Borrar un producto

export default router;