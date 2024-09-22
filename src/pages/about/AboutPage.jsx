import React from "react";
import { FaUserCheck, FaBullseye, FaUsers } from "react-icons/fa";
import BtnOne from "../../components/Buttons/BtnOne";
import { motion } from "framer-motion"; // Animation library
import Footer from "../../components/Footer";
import BtnTwo from "../../components/Buttons/BtnTwo";
import PageTitle from "../../utilities/PageTitle";

const About = () => {
  return (
    <div className="overflow-y-auto space-y-10">
        <PageTitle title={'About Us'}/>
    <div className="py-20 px-6 md:px-20 min-h-screen">
      <section className="text-center max-w-4xl mx-auto mb-16">
        <motion.h1
          className="text-4xl font-extrabold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          About <span className="text-pry">myTask</span>
        </motion.h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          myTask is an all-in-one task management tool designed to boost your productivity and keep your team on track. With powerful features and an easy-to-use interface, it's your best companion for efficient task execution.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 text-center">
        <motion.div
          className="bg-neutral-200 dark:bg-neutral-900 p-8 rounded-md shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <FaBullseye className="text-3xl mx-auto mb-3 text-pry" />
          <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            To empower individuals and teams by providing them with an effective task management platform that enhances collaboration and simplifies workflow.
          </p>
        </motion.div>

        <motion.div
          className="bg-neutral-200 dark:bg-neutral-900 p-8 rounded-md shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <FaUserCheck className="text-3xl mx-auto mb-3 text-pry" />
          <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            To become the leading task management solution globally by focusing on seamless productivity, user-centric design, and innovative features.
          </p>
        </motion.div>

        <motion.div
          className="bg-neutral-200 dark:bg-neutral-900 p-8 rounded-md shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <FaUsers className="text-3xl mx-auto mb-3 text-pry" />
          <h3 className="text-2xl font-bold mb-2">Our Values</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            We prioritize collaboration, transparency, and continuous learning to ensure our platform evolves with the needs of our users.
          </p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pry">Key Features</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mt-4">
            Discover how myTask can help you manage tasks efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-neutral-200 dark:bg-neutral-900 p-8 rounded-md shadow-md hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-bold mb-3 text-pry">Task Management</h4>
            <p className="text-neutral-600 dark:text-neutral-400">
              Easily create, assign, and track tasks across your team, ensuring everything stays on schedule.
            </p>
          </motion.div>

          <motion.div
            className="bg-neutral-200 dark:bg-neutral-900 p-8 rounded-md shadow-md hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-bold mb-3 text-pry">Collaborative Workspace</h4>
            <p className="text-neutral-600 dark:text-neutral-400">
              Work together seamlessly with real-time collaboration tools, file sharing, and instant notifications.
            </p>
          </motion.div>

          <motion.div
            className="bg-neutral-200 dark:bg-neutral-900 p-8 rounded-md shadow-md hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-bold mb-3 text-pry">Analytics & Reporting</h4>
            <p className="text-neutral-600 dark:text-neutral-400">
              Stay informed with detailed reports and analytics, helping you understand team performance and productivity trends.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="text-center mt-20">
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Ready to Boost Your Productivity?
        </motion.h3>
        <BtnTwo
          name="Get Started Now"
          style="px-10 py-3 bg-pry hover:bg-pry-dark mx-auto font-bold rounded-md transition-all duration-300"
          path={'login'}
        />
      </section>
    </div>
      <Footer/>
    </div>
  );
};

export default About;
