import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const result = await response.json();
            setProduct(result);
        }
        fetchProducts();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="text-center">
            <h1 className="text-4xl font-semibold mt-4">{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} className="w-full h-100 object-contain"/>          
            <p className="text-gray-500">{product.description}</p>
            <p className="text-gray-500">Price: {product.price}$</p>
            <p className="text-gray-500">Brand: {product.brand}</p>
            <p className="text-gray-500">Category: {product.category}</p>
        </div>
    )

}