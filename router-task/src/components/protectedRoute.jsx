import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({isAllowed , redirectPath , children}){
    const location = useLocation()
    if(!isAllowed()){
        return <Navigate to={redirectPath} state={{from:location.pathname}}/>
    }
    return children
}