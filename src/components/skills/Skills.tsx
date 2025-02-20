import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MagicCard } from "../magicui/magic-card";
import {useState,useEffect} from "react"

const Skills = () => {
  const skills = [
    "javascript",
    "typescript",
    "react",
    "nextdotjs",
    "nodedotjs",
    "mongodb",
    "tailwindcss",
    "framer"
  ];

  const [moveX, setMoveX] = useState(400);
  const [duration,setDuration] = useState (5)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMoveX(120);
        setDuration (1.5)
      } else if (window.innerWidth < 1024) {
        setMoveX(180); 
        setDuration(1.5)
      } else {
        setMoveX(400);
        setDuration(5)
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <section id="skills" className="py-24 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="mt-4 md:w-full md:text-lg text-md text-white sm:text-xl w-1/2 mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
           className="mt-4 md:w-full md:text-lg text-md text-white sm:text-xl w-1/2 mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Here are some of the technologies I work with regularly.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                className="relative h-32 w-full"
              >
                <MagicCard
                  className="md:w-full sm:w-full md:mx-0 h-full rounded-md p-2 w-1/2 mx-20 "
                  gradientColor= "green"
                >
                    <motion.div
                    initial ={{x:0}}
                    animate ={{x:moveX}}
                    transition = {{duration: duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}}>
                  <Card className="relative shadow-lg flex items-center justify-center">
                    <CardContent className="flex flex-col items-center">
                      <img
                        src={`https://cdn.simpleicons.org/${skill}/000000`}
                        alt={skill}
                        className="h-12 w-12"
                      />
                      <p className="mt-2 text-lg font-semibold text-gray-800">{skill}</p>
                    </CardContent>
                  </Card>
                  </motion.div>
                </MagicCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
