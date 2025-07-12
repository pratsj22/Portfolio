import { useState } from 'react';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    title: 'Patronix',
    subtitle: 'Ecommerce Website',
    description: 'Developed a feature-rich full-stack E-commerce platform from scratch using React.js for frontend, Node.js and Express.js for backend APIs, and MongoDB for database management. Used Redux toolkit for state management and ensured seamless user experience through responsive design and optimized performance.',
    image: '/images/patronix.png',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux'],
    links: { live: 'https://patronix-ecommerce-website.onrender.com', github: 'https://github.com/pratsj22/Patronix-Ecommerce-Website' },
    gallery: ['/images/patronix.png', '/images/patronix1.png','/images/patronix2.png','/images/patronix3.png','/images/patronix4.png','/images/patronix5.png'],
  },
  {
    title: 'Automatify',
    subtitle: 'Text-Automation Website',
    description: 'Developed a text-automation website with features such as text-summarization, text-extraction, and language translation. Implemented NLP algorithms for text summarization and language processing. Used React for frontend interface and Flask with Python for backend processing.',
    image: '/images/automatify.png',
    tech: ['React.js', 'Flask', 'Python', 'NLP'],
    links: { live: 'https://automatify-text-automation-website.onrender.com', github: 'https://github.com/pratsj22/Automatify-Text-Automation-Website' },
    gallery: ['/images/automatify.png', '/images/automatify1.png','/images/automatify2.png','/images/automatify3.png','/images/automatify4.png'],
  },
  {
    title: 'ExpenseGauge',
    subtitle: 'Expense Tracker App',
    description: 'Developed a full-stack Expense Tracker app with Expo (React Native), Node.js, Express, and MongoDB for seamless data flow and secure user management. Implemented global state handling using Zustand and crafted a responsive UI with NativeWind. Added full CRUD functionality for expenses and visualized financial trends through a dynamic line chart.',
    image: '/images/expensegauge.jpg',
    tech: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Express', 'Zustand', 'NativeWind'],
    links: {  },
    gallery: ['/images/expensegauge1.jpg', '/images/expensegauge2.jpg', '/images/expensegauge3.jpg', '/images/expensegauge4.jpg'],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className='flex w-full pt-5 md:pb-16 pb-10 sm:scroll-mt-0 scroll-mt-60' style={{ minHeight: 'calc(100vh - 90px)' }} id='projects'>
      <div className='flex items-center w-full mt-16 flex-col relative overflow-hidden box-border xl:px-20 md:px-10 px-5'>
        {/* <img src='/new.jpg' alt='' className='absolute inset-0 h-full w-full opacity-10 mask-image' /> */}
        <h1 className='md:text-5xl text-4xl font-bold text-indigo-100 tracking-wide md:pb-5 pb-2 pt-10 mb-10 text-left w-full pl-10 font-poppins'>Projects</h1>
        <div className='flex w-full md:w-11/12 h-fit md:p-5 p-2 justify-between flex-wrap gap-8'>
          {projectsData.map((project, idx) => (
            <div
              key={project.title}
              className='group rounded-3xl shadow-md relative hover:text-indigo-200 border-2 border-custom-bg text-gray-300 hover:border-indigo-700 hover:shadow-blue-500 transition-all ease-in duration-300 cursor-pointer bg-custom-bg overflow-hidden md:h-[21rem] h-[18rem] md:w-[21rem] w-[18rem] mx-auto'
              onClick={() => openModal(project)}
            >
              <img src={project.image} alt='' className='h-full w-full opacity rounded-3xl' />
              <div className='absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all ease-in duration-300'></div>
              <div className='text-sm font-semibold text-left bg-black/60 group-hover:bg-indigo-900/90 border border-none group-hover:border-solid group-hover:border-indigo-700 rounded-full p-2 px-6 absolute bottom-5 left-5'>
                {project.title}
                <div>{project.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Modal placeholder for integration */}
        {modalOpen && selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Projects;