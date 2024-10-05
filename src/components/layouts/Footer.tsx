import React from "react";
import Input from "../input/Input";
import Logo from "../logo/Logo";
import NavLinks from "../navigation/NavLinks";
const Footer=()=>{
    const FooterItems = [
        {
            title: 'Take a tour',
            items: [
                { name: 'Features', href: '#' },
                { name: 'Partners', href: '#' },
                { name: 'Pricing', href: '#' },
                { name: 'Product', href: '#' },
                { name: 'Support', href: '#' },
            ],
        },
        {
            title: 'Our Company',
            items: [
                { name: 'About Us', href: '#' },
                { name: 'Agents', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'Media', href: '#' },
                { name: 'Contact Us', href: '#' },
            ],
        },
    ];
    
    return(
        <footer className="w-full p-10 lg:flex item-center animate-fade-up animate-delay-300 animate-once">
            <div className="flex flex-col justify-center lg:w-[25%] item-center ">
                <Logo className="flex items-start justify-center w-20 h-20 m-auto lg:justify-start lg:m-0"></Logo>
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
                {FooterItems.map((section, index) => (
                    <div key={index} className="flex flex-col items-center w-full py-6">
                        <h3 className="w-full mb-12 text-2xl font-bold text-center text-cyan-600">{section.title}</h3>
                        <ul><NavLinks navItems={section.items} className="mb-6 text-xl" /></ul>
                    </div>
                ))}
                <div className="flex flex-col items-center w-full py-6">
                    <h3 className="w-full mb-12 text-2xl font-bold text-center text-cyan-600">Subscribe</h3>
                    <p className="m-0 text-lg text-start ">Subscribe to get latest hotel blog news from us</p>
                   <div className="flex items-center justify-center w-full">
                        <Input placeholder="Email Address"  />
                   </div>
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