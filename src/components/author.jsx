import Card from "./card"
import {
    FaInstagramSquare, FaYoutube
    , FaXTwitter
    , FaFacebook
} from "react-icons/fa";


function Author() {
    return (
        <>
            <div className="w-full h-full bg-[#F6F6F7] flex flex-col items-center justify-center p-4 rounded-md mt-10">
                <div className="w-full flex text-[#696A75] items-center justify-center mt-4 gap-3">
                    <div className="">
                        <img src="/profile.png" alt="" /></div>
                    <div className="leading-tight">
                        <div>john doe</div>
                        <div>designation</div>
                    </div>
                </div>
                <div className="description w-full mt-4 text-justify md:text-center xl:px-52">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus ipsa rerum quidem maiores ratione sint? Distinctio iure modi neque aspernatur earum assumenda facilis </div>
                <div className=" flex gap-4 mt-4">
                    <FaInstagramSquare />
                    <FaYoutube />
                    <FaXTwitter />
                    <FaFacebook />
                </div>

            </div>


            <div className=" md:mt-xl py-12 flex gap-2 sm:gap-3 md:gap-5 lg:gap-4 flex-wrap items-center justify-center">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}
export default Author