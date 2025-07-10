import { useEffect , useState} from "react"
import {Link, useSearchParams} from 'react-router-dom'

export default function Product(){
    const [products , setProducts] = useState([])
    const [searchParams , setSearchParams] = useSearchParams()
    const query = searchParams.get("q") || ''
    const [input , setInput] = useState(query)
    useEffect(() => {
        async function fetchProducts() {
            const url = query ? `https://dummyjson.com/products/search?q=${query}` : 'https://dummyjson.com/products'
            const response = await fetch(url)
            const result = await response.json()
            setProducts(result.products)
        }
        fetchProducts()
    },[])

    function handleSubmit(e){
        e.preventDefault()
        if(input){
            setSearchParams({q:input})
        }else{
            setSearchParams({})
        }
    }
    return(
        <div className="w-[80%] m-auto">
            <h1 className="ml-5 p-3 font-medium text-4xl">Products List</h1>
            <form onSubmit={e => handleSubmit(e)} className="w-[90%] m-auto text-center p-5">
                <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="what are you looking for"
                className="w-[60%] p-1.5 rounded-md border-2 border-gray-500 bg-white"
                />
                <button className="text-white bg-blue-900 p-2 rounded-sm ml-2 w-[7%] cursor-pointer">Search</button>
            </form>
            <div className="grid grid-cols-3 gap-6">
                {
                    products?.map(product => (
                        <div key={product.id} className="border border-gray-200 rounded-lg hover:shadow-lg hover:duration-500 transition-shadow p-4">
                            <img src={product.thumbnail} alt={product.title} className="w-full h-50 object-contain" />
                            <div className="p-4">
                                <strong className="text-lg text-blue-900 ">{product.title}</strong><br/>
                                <div className="flex my-4">
                                    <img src="/src/assets/location.svg" alt="location" />
                                    <span className="text-gray-500 p-1 ml-1">Southwestern Ontario, Ontario, Canada</span>
                                </div>
                                
                                <div className="flex border-top border-t-gray-500 p-2 relative">
                                    <p className="text-blue-900 text-2xl font-bold font-serif">$ {product.price}</p>
                                    <Link to={`products/${product.id}`} 
                                    className=" text-blue-900 p-2 border border-blue-900 rounded-md font-semibold absolute right-0 top-1 hover:bg-blue-900 hover:text-white duration-100">
                                        view details
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}