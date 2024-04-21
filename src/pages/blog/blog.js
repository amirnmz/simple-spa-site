import { Link, Outlet } from "react-router-dom";
import Navbarsite from "../../component/navbar/navbar";
import "./blog.css";


function Blog(){
    return(
        <div className="blogwrapper">
        <Navbarsite></Navbarsite>
        <h1>صحفه مقالات</h1>
        <hr />
       <div className="btns">
        <Link to="php" className="linkbtn">php blog</Link>
        <Link to="js" className="linkbtn">js blog</Link>
        <Link to= "react" className="linkbtn">react blog</Link>
       </div>
        <hr />
        <Outlet/>
      
        </div>

    )
}
export default Blog