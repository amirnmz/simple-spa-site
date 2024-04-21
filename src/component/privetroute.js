import { Navigate } from "react-router-dom";
import  {islogin}  from "../utils";

function Privetroute({children}){
   
    return (
        <>
         {islogin()?children:<Navigate to="/login"/>}

        </>



    )

}
export default Privetroute;