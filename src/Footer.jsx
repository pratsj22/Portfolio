import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-custom-bg py-6 overflow-hidden">
            {/* Main Background Gradient */}
            <div className="absolute inset-0 bg-custom-bg from-[#18092b] via-[#231452] to-[#1a0b2e]"></div>


            <div className="relative z-10 max-w-6xl mx-auto px-4">
                {/* Main Footer Content */}
                <p className="text-base mb-5 font-inter text-gray-400">
                    Made with ❤️
                </p>
                <div className="text-center mb-5">

                    {/* Tech Stack Icons */}
                    <div className="flex flex-wrap justify-center items-center gap-6 mb-5">
                        <div className="flex flex-col items-center group">
                            <img src="/react-icon.png" alt="React" className="w-12 h-12" />
                        </div>

                        <div className="flex flex-col items-center group">
                            <img src="/tailwind.png" alt="Tailwind CSS" className="w-12 h-6" />
                        </div>


                    </div>

                    <div className="text-center">
                        <p className="text-gray-500 text-xs font-inter">
                            <a
                                href="https://storyset.com/coding"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                            >
                                Coding illustrations by Storyset
                            </a>
                        </p>
                    </div>

                </div>

                {/* Attribution */}
                <div className="border-t border-gray-800 pt-1">
                    <div className="text-gray-400 font-inter">
                        <p className="text-sm mt-2">
                            © 2024 Prathmesh Jain. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer; 