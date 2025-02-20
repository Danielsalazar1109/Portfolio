import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Marquee } from "../magicui/marquee";

const Projects = () => {
  const projects = [
    { title: "HUH STORE", description: "Cloth store using React Native", link: "https://huhstore.netlify.app/", image: "src/assets/HUH.png", logos: ["typescript", "react", "nodedotjs", "mongodb", "tailwindcss"] },
    { title: "AlphaBites", description: "E-commerce using Next.js with Stripe payments", link: "https://alpha-bites.vercel.app/", image: "src/assets/Alpha.png", logos: ["typescript", "react", "mongodb", "clerk", "stripe", "tailwindcss"] },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto md:px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-xl font-extrabold text-white sm:text-4xl mb-8 mx-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="mt-4 md:w-full md:text-lg text-md text-white sm:text-xl w-1/2 mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Here are some of the projects I’ve worked on, showcasing my skills in web development.
        </motion.p>

        <div className="mt-16 grid sm:grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((project, index) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

            return (
              <motion.div
              ref={ref}
              key={index}
              className=" px-16 hover:shadow-xl transition duration-300 ease-in-out flex w-full flex-col gap-4 lg:h-[350px] lg:flex-row relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
                <div className="flex flex-col">
                  <img className="w-[400px] h-[15z0px] md:mx-32 lg:mx-0" src={project.image} alt={project.title} />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                      {project.title}
                    </h5>
                    <p className="mb-3 font-normal text-orange-500 dark:text-gray-400">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Visit {project.title}
                    </a>
                  </div>

                  <Marquee className="w-96 py-16">
                    {project.logos.map((logo, i) => (
                      <motion.img
                        key={i}
                        src={`https://cdn.simpleicons.org/${logo}`}
                        alt={logo}
                        className="h-8 mx-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                      />
                    ))}
                  </Marquee>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
