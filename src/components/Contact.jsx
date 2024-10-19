import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [hovered, setHovered] = useState(false);

  return (
    <div id="Contact" className="h-56 md:h-96 md:pt-20 px-10 md:px-20">
      {/* Heading Animation */}
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: "tween" }}
        className="font-bold text-3xl md:text-5xl mb-10"
      >
        LET'S CONNECT
      </motion.h1>

      <motion.a
        href="mailto:akhayakumarsahoo06@gmail.com"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="text-xl md:text-2xl block mt-10 hover:bg-neutral-300 dark:hover:bg-black2"
      >
        {hovered ? (
          // Email text when hovered
          <span>AKHAYAKUMARSAHOO06@GMAIL.COM</span>
        ) : (
          // Default "EMAIL ME" text when not hovered
          <span>CLICK HERE TO EMAIL ME</span>
        )}
      </motion.a>
    </div>
  );
}

export default Contact;
