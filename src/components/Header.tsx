import { Link } from "react-router-dom";

const Header = () => {
    const home_dir = "/";
    return (
        <div className="border-b-2 border-b-orange-500 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link  to={home_dir} className="text-3xl font-bold tracking-tight text-orange-500">
                    MearnEats.com
                </Link>
            </div>
        </div>
    )
}

export default Header;