import { FaFacebook,  FaTwitter, FaInstagram, FaLinkedin  } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="mt-32">
            <div className="bg-[url('/src/assets/images/more/13.jpg')]">
            <hr className="border-1 border-[#331A15]" />
                <div className="max-w-7xl mx-auto px-4">
                <div className="border-2 border-[#331A15] w-[75px] h-[90px] mb-6 mt-[121px]">
                    <img src="/src/assets/images/more/logo1.png" className="" alt="" />
                </div>
                <div className="grid md:grid-cols-2 space-x-10 pb-12">
                <div className="">
                <p className="text-[#331A15] text-[45px] mb-8 font-extrabold">Espresso Emporium</p>
                <p className="text-xl text-[#1B1A1A] font-bold mb-8">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className="flex items-center space-x-[19.2px] mb-6">
                <FaFacebook className="text-[#331A15] text-[40px] border-2 border-[#331A15]" />
                < FaTwitter className="text-[#331A15] text-[49.2px]" />
                <FaInstagram className="text-[#331A15] text-[40px] border-2 border-[#331A15]" />
                <FaLinkedin className="text-[#331A15] text-[45px]" />
                </div>
                <div>
                    <h1 className="text-[45px] mb-8">Get in Touch</h1>
                    <div className="flex space-x-6 items-center mb-4">
                    <HiPhone className="text-2xl" />
                    <p className="text-xl">+88 01533 333 333</p>
                    </div>
                    <div className="flex space-x-6 items-center mb-4">
                    <HiMail className="text-2xl" />
                    <p className="text-xl">info@gmail.com</p>
                    </div>
                    <div className="flex space-x-6 items-center">
                    <FaLocationDot className="text-2xl" />
                    <p className="text-xl">72, Wall street, King Road, Dhaka</p>
                    </div>
                </div>
                </div>
                <div>
                    <h1 className="text-[45px]">Connect with Us</h1>
                <div className="space-y-4">
                     <label className="input input-bordered flex items-center gap-2">
                    Name
                    <input type="text" name="name" className="grow" placeholder="" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input type="email" name="email" className="grow" placeholder="" />
                    </label>
                    <label className="textarea textarea-bordered flex items-center gap-2">
                    Message
                    <textarea name="message" className="grow" id=""></textarea>
                    {/* <input type="email" name="email" className="grow" placeholder="" /> */}
                    </label>
                    <div className="">
                    <button className="w-[150px] border-2 rounded-3xl  border-[#331A15] "><span className="text-xl p-[9px]">
                    Send Message
                        </span></button>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </div>
            <div className="bg-[url('/src/assets/images/more/24.jpg')]">
            <p className="text-center text-white py-3 text-xl">Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
            
        </div>
    );
};

export default Footer;