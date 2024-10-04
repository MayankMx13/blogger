import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div className="w-full pt-8 flex flex-col md:flex-row justify-between items-center">

            <div className="left mb-4 md:mb-0">
                <h1 className="text-2xl md:text-3xl font-bold">BloGGer</h1>
            </div>

            <div className="middle flex justify-between items-center gap-3 md:gap-5 mb-4 md:mb-0 md:ml-8 lg:ml-24 lg:mr-10">
                <input
                    type="text"
                    className="border-4 border-none rounded-2xl p-2 w-[200px] sm:w-[300px] md:w-[350px] bg-[#F4F4F5]"
                    placeholder="Search..."
                />
                <button className="text-gray-500">
                    <FaSearch />
                </button>
            </div>

            <div className="right">
                <ul className="flex gap-2 sm:gap-3 md:gap-4 font-medium">
                    <Link><li className="text-sm sm:text-base md:text-lg">Home</li></Link>
                    <Link><li className="text-sm sm:text-base md:text-lg">Blog</li></Link>
                    <Link><li className="text-sm sm:text-base md:text-lg">Contact</li></Link>
                    <Link to="/login"><li className="text-sm sm:text-base md:text-lg">Login</li></Link>
                </ul>
            </div>
        </div>
    );

}
export default Navbar