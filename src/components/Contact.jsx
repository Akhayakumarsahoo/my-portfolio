import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [hovered, setHovered] = useState(false);

  return (
    <div id="Contact" className="h-96 pt-10 md:pt-20 px-10 md:px-20">
      {/* Heading Animation */}
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, type: "tween" }}
        className="font-bold text-3xl md:text-5xl mb-10"
      >
        LET'S CONNECT
      </motion.h1>

      {/* Anchor Tag with Motion Animation */}
      <motion.a
        href="mailto:akhayakumarsahoo06@gmail.com"
        initial={{ y: -100, opacity: 0 }} // Starts hidden above
        whileInView={{ y: 0, opacity: 1 }} // Comes to original position
        transition={{ duration: 0.8, type: "spring", delay: 0.5 }} // Spring for smooth animation
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="text-2xl block mt-10 hover:bg-black2"
      >
        {hovered ? (
          // Email text when hovered
          <motion.span
            initial={{ y: -20, opacity: 0 }} // Text starts off hidden
            animate={{ y: 0, opacity: 1 }} // Text becomes visible on hover
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            AKHAYAKUMARSAHOO06@GMAIL.COM
          </motion.span>
        ) : (
          // Default "EMAIL ME" text when not hovered
          <motion.span
            initial={{ y: 20, opacity: 0 }} // Text starts below, hidden
            animate={{ y: 0, opacity: 1 }} // Text animates to visible
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            EMAIL ME
          </motion.span>
        )}
      </motion.a>
    </div>
  );
}

export default Contact;
