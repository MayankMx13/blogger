import { useNavigate } from "react-router-dom";

function Card() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/singlepost"); // Navigate to single post route
    };



    return (

        <div className=" p-8 w-[90%] h-[50%] md:w-[46%] lg:w-[30%] md:h-[45%] lg:h-[40%]  flex flex-col gap-3 border-2 border-[#E8E8EA] rounded-md" onClick={handleClick}>
            <div className="w-full h-full ">
                <img src="/Rectangle 38.png" alt="" className="w-full h-full object-cover flex flex-col items-start" />
            </div>
            <span className="bg-blue-200 text-[#4B6BFB] font-medium p-1 rounded-md inline-block">
                Technology
            </span>
            <h3 className="text-wrap font-medium lg:text-xl">The Impact of Technology on the Workplace: How Technology is Changing</h3>
            <div className="flex items-center justify-start gap-2">
                <img src="/profile.png" alt="" className=" w-4 h-4" />
                <span className="text-[9px] md:text-sm">Jason Francisco</span>
            </div>
        </div>

    )
}
export default Card