import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../pages/login'
import ProtectedRoute from '../components/protectedRoute'
import Layout from '../pages/layout'
import Product from '../pages/product'
import ProductDetails from '../pages/productdetails'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route  index element={<Product/>}/>
                    <Route path='login' element={<Login/>} />
                    <Route path='products/:id' element={
                        <ProtectedRoute redirectPath="/login" 
                            isAllowed= {()=>{
                                const user = localStorage.getItem("user")
                                return user
                            }}>
                                <ProductDetails/>
                        </ProtectedRoute>}/>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}