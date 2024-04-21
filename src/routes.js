import Privetroute from "./component/privetroute";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Panel from "./pages/panel/panel";
import Cours from "./pages/cours/cours";
import Setting from "./pages/setting";


const Allroutes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "blog", element: <Blog />,children:[
        { path: "php",element:<h2>php blog</h2>},
        { path: "js",element:<h2>js blog</h2>},
        { path: "react",element:<h2>react blog</h2>},
    ] },
    { path: "/login", element: <Login /> },
    { path: "/panel", element: <Privetroute> <Panel/> </Privetroute>},
    { path: "/setting", element: <Privetroute> <Setting/> </Privetroute> },
    { path: "/cours/:courseid", element:<Cours/> },

    


]
export default Allroutes;