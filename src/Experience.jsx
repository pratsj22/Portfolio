import React from "react";

const workExperience = [
    {
        company: "Tata Consultancy Services (TCS)",
        role: "Systems Engineer",
        team: undefined,
        duration: "Oct 2024 - Present",
        description:
            "Developing enterprise-level Generative AI solutions using Azure OpenAI, Python, and FastAPI to automate document processing and enhance business workflows. Designed and developed responsive user interfaces using React.js, enabling users to interact with AI models and visualize results in real time. Contributed to improving code quality and maintainability through regular code reviews and technical discussions.",
        techStack: ["React.js", "Python", "FastAPI", "Azure OpenAI"],
        logo: "/images/tcs.webp",
    },
    // Add more experiences here in the future
];

export default function Work() {
    return (
        <section className="py-12 sm:scroll-mt-0 scroll-mt-60" id="experience">
            <div className=" mx-auto xl:px-20 lg:px-15 md:px-10 px-5">
                <h1 className="md:text-5xl text-4xl font-bold text-indigo-100 my-16 text-left w-full font-poppins pl-10">Experience</h1>
                <div className="relative xl:px-10 lg:px-5 md:px-2 w-full lg:w-2/3 py-5 mx-auto">
                    {/* Timeline vertical line with gradient */}
                    <div className="absolute xl:left-[26px] lg:left-[14px] md:left-[10px] left-[2px] top-0 h-full w-1 bg-gradient-to-b from-indigo-700 via-indigo-900 to-gray-800 rounded-full z-0" />
                    {workExperience.map((exp, idx) => (
                        <div key={idx} className="mb-16 relative group">
                            {/* Animated Timeline dot */}
                            <span className="absolute xl:-left-6 lg:-left-4 md:-left-2 -left-2 top-8 w-6 h-6 bg-gray-950 border-4 border-indigo-500 group-hover:border-indigo-700 transition-all duration-300 rounded-full shadow-lg flex items-center justify-center z-[9]">
                                <span className={`block w-2.5 h-2.5 bg-indigo-500 group-hover:bg-indigo-700 rounded-full ${idx === 0 ? 'animate-pulse' : ''}`}></span>
                            </span>
                            <div className="ml-8 bg-gray-900 rounded-2xl shadow-xl border-t-4 border-indigo-500 group-hover:border-indigo-700 transition-all duration-300 p-8 hover:scale-[1.025] hover:shadow-2xl relative">
                                {/* Company logo placeholder */}
                                <div className="absolute -top-8 left-8 w-16 h-16  bg-indigo-950 rounded-full flex items-center justify-center shadow-md border-2 border-indigo-800 overflow-hidden">
                                    {exp.logo && <img src={exp.logo} alt={exp.company} className="object-contain" />}
                                    {/* <span className=" text-indigo-300 font-bold text-lg">{exp.company.split(' ')[0]}</span> */}
                                </div>
                                <div className="pt-8">
                                    <h2 className="md:text-2xl text-xl font-bold  text-indigo-300 mb-1 flex items-center gap-2">
                                        {exp.company}
                                    </h2>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-2">
                                        <span className="md:text-lg text-base font-semibold  text-gray-200">{exp.role}</span>
                                        <span className="md:text-sm text-xs  text-gray-400">{exp.team}</span>
                                        <span className="md:text-sm text-xs text-gray-500">{exp.duration}</span>
                                    </div>
                                    <p className="text-gray-300 mb-4 leading-relaxed text-sm  text-justify">{exp.description}</p>
                                    <div className="flex flex-wrap gap-3 mt-2">
                                        {exp.techStack.map((tech) => (
                                            <span key={tech} className=" bg-indigo-900 text-indigo-200 px-4 py-1 rounded-full text-xs font-semibold shadow-sm border  border-indigo-800">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 