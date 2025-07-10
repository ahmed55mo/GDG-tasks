import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
            {/* navbar */}
            <nav className="fixed relative p-3 w-300 m-auto flex">
                <div className="flex">
                    <img src="/src/assets/logo.svg"/>
                    <span className="text-blue-900 font-bold ml-1 mt-2">RealPro</span>
                </div>
                <ul className="mx-20 p-2 flex gap-12">
                    <li className="font-medium text-gray-800 cursor-pointer">Home</li>
                    <li className="font-medium text-gray-800 cursor-pointer">Listing</li>
                    <li className="font-medium text-gray-800 cursor-pointer">Contact</li>
                    <li className="font-medium text-gray-800 cursor-pointer">Agents</li>
                    <li className="font-medium text-gray-800 cursor-pointer"> About</li>
                    <li className="font-medium text-gray-800 cursor-pointer">Blog</li>
                </ul>
                <div className="p-1 w-80 flex gap-5">
                    <button type="button" className="mr-4 font-medium cursor-pointer hover:underline" >Sign Up</button>
                    <button type="button" className="p-2 bg-blue-900 text-white rounded-sm cursor-pointer">Create A Listing</button>
                    <div className="bg-white w-10 h-10  rounded-full shadow-xl cursor-pointer hover:animate-pulse duration-100">
                        <img src="/src/assets/market.svg" alt="market car" className="ml-[50%] mt-[50%] -translate-[50%]" />
                    </div>
                </div>
            </nav>
            <Outlet/>
            {/* footer */}
            <footer className="mt-10 bottom-0 bg-gray-300 w-[100%] p-5">
                <div className="flex w-[100%] m-auto p-1 justify-center">
                    <ul>
                        <li className="flex">
                            <img src="/src/assets/logo.svg"/>
                            <span className="text-blue-900 font-bold ml-1 mt-2">RealPro</span>
                        </li>
                        <li className="flex mt-5 w-100">
                            <img src="/src/assets/location.svg" alt="location" />
                            <span className="text-gray-500 pl-2 hover:underline cursor-pointer">3755 St SE Salem, Corner with Sunny Boulevard, 37557, Australia</span>
                        </li>
                        <li className="flex mt-5 w-90">
                            <img src="/src/assets/phone.svg" alt="location" />
                            <span className="text-gray-500 pl-2 hover:underline cursor-pointer">(305) 555-4446</span>
                        </li>
                        <li className="flex mt-5 w-90">
                            <img src="/src/assets/email.svg" alt="location" />
                            <span className="text-gray-500 pl-2 hover:underline cursor-pointer">AhmedMohamed@gmail.com</span>
                        </li>
                        <li className="flex gap-5 mt-5">
                            <img src="/src/assets/twitter.svg" alt="twitter" className="cursor-pointer" />
                            <img src="/src/assets/facebook.svg" alt="facebook" className="cursor-pointer"/>
                            <img src="/src/assets/insta.svg" alt="instagram" className="cursor-pointer"/>
                            <img src="/src/assets/youtube.svg" alt="youtube" className="cursor-pointer"/>
                        </li>
                    </ul>
                    
                    <ul className="mx-10">
                        <li className="font-bold text-xl">Explore</li>
                        <li className="mt-3 text-gray-500 hover:underline cursor-pointer">About Us</li>
                        <li className="mt-3 text-gray-500 hover:underline cursor-pointer">Our Projects</li>
                        <li className="mt-3 text-gray-500 hover:underline cursor-pointer">Pricing</li>
                        <li className="mt-3 text-gray-500 hover:underline cursor-pointer">Testimonial</li>
                        <li className="mt-3 text-gray-500 hover:underline cursor-pointer">Appointment</li>
                    </ul>
                    
                    <ul className="mx-10">
                        <li className="font-bold text-xl">Links</li>
                        <li className="mt-3 text-gray-500 hover:underline cursor-pointer">Services</li>
                        <li className="mt-3 text-gray-500 hover:underline cursor-pointer">Contact</li>
                        <li className="mt-3 text-gray-500 hover:underline cursor-pointer">Home Buying</li>
                        <li className="mt-3 text-gray-500 hover:underline cursor-pointer">Home Selling</li>
                        <li className="mt-3 text-gray-500 hover:underline cursor-pointer">Real Estate</li>
                    </ul>
                    
                    <ul className="mx-10">
                        <li className="font-bold text-xl">T&C</li>
                        <li className="mt-3 text-gray-500 hover:underline cursor-pointer">Proberty on sale</li>
                        <li className="mt-3 text-gray-500 hover:underline cursor-pointer">About US</li>
                        <li className="mt-3 text-gray-500 hover:underline cursor-pointer">Our Team</li>
                        <li className="mt-3 text-gray-500 hover:underline cursor-pointer">Terms of use</li>
                        <li className="mt-3 text-gray-500 hover:underline cursor-pointer">Privacy Policy</li>
                    </ul>
                    
                    <ul className="mx-10">
                        <li className="font-bold text-xl">Subscribe</li>
                        <li className="mt-3 text-gray-500">Sign Up for Our Newsletter to get Latest Updates and Offers</li>
                        <li className="flex mt-3">
                            <input type="email" name="email" className="p-2 bg-white border-2 rounded-bl-xl rounded-tl-xl w-[60%]" placeholder="Your Email"/>
                            <button className="text-white bg-blue-900 p-3 cursor-pointer rounded-br-xl rounded-tr-xl">subscribe</button>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}