import React from "react";
const Footer=()=>{

    return(
        <footer className="w-full p-10 lg:flex item-center animate-fade-up animate-delay-300 animate-once">
            <div className="flex flex-col justify-center lg:w-[25%] item-center ">
                <div className="flex items-start justify-center w-20 h-20 m-auto lg:justify-start lg:m-0">
                    <img src="./hotel-sign.png" alt="Hotel Logo" />
                </div>
                <p className="mt-8 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia at, necessitatibus repellat quos nemo ab, natus asperiores dolor commodi, debitis perferendis ad eligendi voluptatem animi quasi cum maxime architecto sapiente?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit explicabo praesentium, veniam modi, porro velit asperiores, aspernatur impedit debitis cumque accusantium eum dignissimos sapiente quae nisi. Pariatur, dolore adipisci?</p>
                <div className="hidden mt-8 lg:flex">
                    <div className="">
                        <img src="./Facebook.png" alt="" />
                    </div>
                    <div className="mx-3">
                        <img src="./Twitter.png" alt="" />
                    </div>
                    <div className="mx-3">
                        <img src="./LinkedIn.png" alt="" />
                    </div>
                    <div className="mx-3">
                        <img src="./Instagram.png" alt="" />
                    </div>
                </div>
                <div className="hidden mt-6 lg:flex">
                <p className="">Design by Dathuong @2024 </p>
                </div>
            </div>
            <div className=" md:flex justify-between lg:w-[75%] lg:px-10 ">
                <div className="flex flex-col items-center w-full py-6 ">
                    <h3 className="w-full mb-12 text-2xl font-bold text-center text-cyan-600">Take a tour</h3>
                    <ul>
                        <li className="mb-6 text-xl "><a href="">Features</a></li>
                        <li className="mb-6 text-xl "><a href="">Partners</a></li>
                        <li className="mb-6 text-xl "><a href="">Pricing</a></li>
                        <li className="mb-6 text-xl "><a href="">Product</a></li>
                        <li className="mb-6 text-xl "><a href="">Support</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center w-full py-6">
                    <h3 className="w-full mb-12 text-2xl font-bold text-center text-cyan-600">Our Company</h3>
                    <ul>
                        <li className="mb-6 text-xl "><a href="">About Us</a></li>
                        <li className="mb-6 text-xl "><a href="">Agents</a></li>
                        <li className="mb-6 text-xl "><a href="">Blog</a></li>
                        <li className="mb-6 text-xl "><a href="">Media</a></li>
                        <li className="mb-6 text-xl "><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center w-full py-6">
                    <h3 className="w-full mb-12 text-2xl font-bold text-center text-cyan-600">Subscribe</h3>
                    <p className="m-0 text-lg text-start">Subscribe to get latest hotel blog news from us</p>
                    <input type="text" placeholder="Email Address" className="w-full px-2 py-2 border-2 border-teal-500 rounded-md lg:w-[85%] md:mt-10 mt-5" />
                </div>
            </div>
            <div className="flex items-center justify-center mt-8 lg:hidden">
                    <div className="">
                        <img src="./Facebook.png" alt="" />
                    </div>
                    <div className="mx-3">
                        <img src="./Twitter.png" alt="" />
                    </div>
                    <div className="mx-3">
                        <img src="./LinkedIn.png" alt="" />
                    </div>
                    <div className="mx-3">
                        <img src="./Instagram.png" alt="" />
                    </div>
            </div>
            <p className="mt-3 text-center lg:hidden">Design by Dathuong @2024 </p>
                
        </footer>
    );
}
export default Footer