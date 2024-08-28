import { Navigate } from "react-router-dom"


export default function PrivateRoute({component}){
    const a = true
  
    return a? <>{component}</> :  <Navigate to='/Home'/>
}