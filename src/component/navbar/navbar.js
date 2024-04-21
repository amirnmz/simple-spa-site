import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./nav.css";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { islogin } from '../../utils';


function Navbarsite() {
    const [loginstatus,setLoginstatus] =useState(islogin()?'خروج':"ورود")
    const logouthandler =()=>{
        document.cookie = "username=admin; expires=Thu, 18 Dec 2000 12:00:00 UTC; path=/";
        setLoginstatus("ورود")

    }
    const expand ='sm'
    return (
        
            <Navbar style={{backgroundColor:"rgb(186,182,253)"}}   expand={expand} >
                <Container >
                    <Navbar.Brand style={{fontFamily:"lalezar",fontSize:"25px"}} href="#">  amirnematzadeh</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                  
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav style={{fontFamily:"lalezar"}} className="justify-content-end flex-grow-1 pe-3 mx-3">
                                <hr />
                                <NavLink to="/" className={"nav-link"}>صحفه اصلی</NavLink>
                                <NavLink to="/about" className={"nav-link"}>درباره ما</NavLink>
                                <NavLink to="/blog" className={"nav-link"}> مقالات</NavLink>
                                <NavLink to="/panel" className={"nav-link"}> پنل</NavLink>


                                {islogin() ? <NavLink onClick={logouthandler} to="/login" className={"nav-link"}> {loginstatus}</NavLink>
                                
                                :<NavLink to="/login" className={"nav-link"}> {loginstatus}</NavLink>
                                
                                }
                                
                            </Nav>
                            
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        
    )
}
export default Navbarsite