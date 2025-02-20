import { Card, CardContent } from "../ui/card";
import { RainbowButton } from "../magicui/rainbow-button"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-xl font-extrabold sm:text-4xl mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="mt-4 md:w-full md:text-lg text-md text-white sm:text-xl w-1/2 mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Feel free to reach out if you have any questions or just want to say hi!
        </motion.p>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-6 bg-transparent border-none shadow-lg text-black">
            <CardContent>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-800 font-semibold md:text-4xl text-xl text-white">NAME</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-orange-500 border-2  text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white md:text-4xl text-xl font-semibold">EMAIL</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-orange-500 border-2 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-gray-600"
                    required
                  />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-white md:text-4xl text-xl font-semibold">MESSAGE</label>
                  <textarea
                    className="w-full p-2 border border-orange-500 border-2 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                    required
                  ></textarea>
                </div>
                <div className="col-span-1 sm:col-span-2 flex justify-center">
                  <RainbowButton type="submit" className="bg-black text-white md:text-4xl text-xl hover:bg-gray-800 px-6 py-6">
                    SEND MESSAGE
                  </RainbowButton>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
