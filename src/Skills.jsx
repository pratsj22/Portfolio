import SVGComponent from './SvgComponent'

const Skills = () => {

  return (
    <div className='flex w-full pt-10 sm:scroll-mt-0 scroll-mt-60' style={{ minHeight: "calc(100vh -90px)" }} id='skills'>
      <div className="flex items-center w-full mt-16 flex-col xl:px-20 md:px-10 px-3 py-1">
        <h1 className='md:text-5xl text-4xl font-bold text-indigo-100 pb-5 box-border font-poppins tracking-wide text-left w-full pl-10'>Skills</h1>
        <div className='flex w-full h-fit md:p-5 p-2 items-center'>
          <div className='lg:flex-[0.5] hidden lg:block'>
            <SVGComponent />
          </div>
          <div className='flex-1 bg-violet-950/40 rounded-lg shadow-lg px-7 py-4'>
            <div className='mb-5'>
              <div className='text-lg text-left text-indigo-200'>Programming Languages
                <hr className='border-indigo-50/10 mt-1' />
              </div>
              <div className='flex items-start mt-3 flex-wrap gap-5 flex-grow'>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/Java-Dark.svg" className='md:h-7 h-6 ' />
                  <p className='text-indigo-100'>
                    Java
                  </p>
                </span>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/Python-Dark.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100'>
                    Python
                  </p>
                </span>
              </div>
            </div>
            <div className='mb-4'>
              <div className='text-lg text-left text-indigo-200'>Web Development
                <hr className='border-indigo-50/10 mt-1' />
              </div>
              <div className='flex items-start mt-3 flex-wrap gap-5 flex-grow'>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/HTML.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100'>
                    HTML
                  </p>
                </span>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/CSS.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100'>
                    CSS
                  </p>
                </span>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/JavaScript.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100'>
                    JavaScript
                  </p>
                </span>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/React-Dark.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100'>
                    ReactJS
                  </p>
                </span>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/NodeJS-Dark.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100'>
                    NodeJS
                  </p>
                </span>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/ExpressJS-Dark.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100'>
                    ExpressJS
                  </p>
                </span>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/MongoDB.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100'>
                    MongoDB
                  </p>
                </span>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/Flask-Dark.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100'>
                    Flask
                  </p>
                </span>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/FastAPI.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100'>
                    FastAPI
                  </p>
                </span>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/TailwindCSS-Dark.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100'>
                    TailwindCSS
                  </p>
                </span>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/Redux.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100 md:text-base text-sm'>
                    Redux
                  </p>
                </span>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/MySQL-Dark.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100 md:text-base text-sm'>
                    MySQL
                  </p>
                </span>
              </div>
            </div>
            <div className='mb-4'>
              <div className='text-lg text-left text-indigo-200'>App Development
                <hr className='border-indigo-50/10 mt-1' />
              </div>
              <div className='flex items-start mt-3 flex-wrap gap-5 flex-grow'>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/React-Dark.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100 md:text-base text-sm'>
                    React Native
                  </p>
                </span>
              </div>
            </div>
            <div className='mb-4'>
              <div className='text-lg text-left text-indigo-200'>Tools
                <hr className='border-indigo-50/10 mt-1' />
              </div>
              <div className='flex items-start mt-3 flex-wrap gap-5 flex-grow'>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/VSCode-Dark.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100 md:text-base text-sm'>
                    VS Code
                  </p>
                </span>
                <span className='w-fit bg-violet-950/90 h-fit z-1 rounded flex p-2 gap-2 items-center px-4 hover:scale-110 hover:shadow hover:shadow-blue-800 transition-all ease-in-out duration-300 cursor-default'>
                  <img src="/icons/Github-Dark.svg" className='md:h-7 h-6' />
                  <p className='text-indigo-100 md:text-base text-sm'>
                    GitHub
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills