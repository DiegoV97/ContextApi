
import { access } from "../app/api"
import { Link } from "react-router-dom"
import { useUserContext } from "../app/providers/UserProvider"



const Login = () => {

    const [user, setUser] = useUserContext();
    return (
        <div>
            <ul>
                <Link to="/" ><li>Home</li></Link>
                <Link to="/Tasks" ><li>Tasks</li></Link>
            </ul>
            <input type="text" onChange={e => setUser(e.target.value)} />
            <button onClick={() =>
                access(user).then(setUser)
            }>Acceder</button>
        </div>
    )
}

export default Login