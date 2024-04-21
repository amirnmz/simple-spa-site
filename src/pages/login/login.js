import { useState } from "react";
import Navbarsite from "../../component/navbar/navbar"
import "./login.css";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";



function Login() {
    const [username, setUsername] = useState('')
    const [password, setPasworrd] = useState('')

    const navigate = useNavigate()
    const submithandler = () => {
        if (username == 'admin' && password == "12345") {
            document.cookie = "username=admin; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
            navigate('/panel');
            


        } else if (username == '') {

            Swal.fire({
                title: 'Error!',
                text: 'نام کاربری خود را وارد کنید',
                icon: 'error',
                confirmButtonText: 'close'
            })

        } else if (username == 'admin' && password == "") {
            Swal.fire({
                title: 'Error!',
                text: '     پسورد خود را وارد کنید',
                icon: 'error',
                confirmButtonText: 'close'
            })
        } else
            Swal.fire({
                title: 'Error!',
                text: 'نام کاربری یا پسورد اشتباه است',
                icon: 'error',
                confirmButtonText: 'close'
            })

    }

    return (
        <>
            <Navbarsite></Navbarsite>
            <div className="login-box" dir="ltr">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input placeholder="admin" onChange={(e) => setUsername(e.target.value)} type="text" />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input placeholder="12345" onChange={(e) => setPasworrd(e.target.value)} type="password" />
                        <label>Password</label>
                    </div>
                    <a onClick={submithandler} type="button" href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        submit
                    </a>
                </form>
            </div>
        </>

    )
}
export default Login