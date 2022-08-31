import { Outlet, Link} from "react-router-dom" 


export default function Setting(){
    return(
        <div>
            <section className="space-x-5 mt-5 ">
                <Link to={"/setting/hp"}>Phone</Link>
                <Link to={"/setting/prof"}>Profile</Link>
                <Link to={"/setting/comp"}>computer</Link>
            </section>
            <section className="mt-10">
                <Outlet />
            </section>
        </div>
    )
}