import { Outlet, Link, useNavigate, useLocation} from "react-router-dom" 


export default function Setting(){
    let navigate = useNavigate();
    let location = useLocation();
    let path = location.pathname.split("/")[1]

    console.log(location.pathname);
    console.log(location.pathname.split("/"));
    console.log("loction =>",location);

    return(
        <div>
            <section className="space-x-5 mt-5 ">
                <Link to={`/${path}/hp`}>Phone</Link>
                <Link to={`/${path}/prof`}>Profile</Link>
                <Link to={`/${path}/comp`}>computer</Link>
            </section>
            <section className="mt-5">
                <Outlet />
            </section>
            <button onClick={()=>{
                return navigate(-1)
            }}>
                {""}
                Back
                </button>
        </div>
    )
}