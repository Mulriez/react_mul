import { Link } from "react-router-dom"

export default function About(){
    return(
        <div>
            <section className="space-x-5 mb-5">
                <Link to={'/about/1/Ghost Rider'}>One</Link>
                <Link to={'/about/2/Blade'}>Two</Link>
                <Link to={'/about/3/Moon Knight'}>Three</Link>
            </section>
            Ini adalah About
        </div>
    )
}