import { motion } from "framer-motion";
const TransitionMotion = (OgComponent) => {
  return () => (
    <div className="">
      <OgComponent />
      <motion.div
        className="fixed top-0 left-0 w-1/5 h-screen bg-yellow-500 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }}
      />
      <motion.div
        className="fixed top-0 left-[20%] w-1/5 h-screen bg-black origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2
        }}
      />
      <motion.div
        className="fixed top-0 left-[40%] w-1/5 h-screen bg-yellow-500 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.5
        }}
      />
      <motion.div
        className="fixed top-0 left-[60%] w-1/5 h-screen bg-black origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.8
        }}
      />
      <motion.div
        className="fixed top-0 left-[80%] w-1/5 h-screen bg-yellow-500 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
          delay: 1.1
        }}
      />
      


      {/*  */}

      <motion.div
        className="fixed bottom-0 left-0 w-1/4 h-screen bg-yellow-500 origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
          delay: 0,
        }}
      />
      <motion.div
        className="fixed bottom-0 left-[20%] w-1/4 h-screen bg-black origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2,
        }}
      />
      <motion.div
        className="fixed bottom-0 left-[40%] w-1/4 h-screen bg-yellow-500 origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.5,
        }}
      />
      <motion.div
        className="fixed bottom-0 left-[60%] w-1/4 h-screen bg-black origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.8,
        }}
      />
       <motion.div
        className="fixed bottom-0 left-[80%] w-1/4 h-screen bg-yellow-500 origin-bottom"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
          delay: 1.1,
        }}
      />
    </div>
    
  );
};

export default TransitionMotion;
