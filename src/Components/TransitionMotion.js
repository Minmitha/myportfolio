import { motion } from "framer-motion";
const TransitionMotion = (OgComponent) => {
  return() => (
    <div>
      <OgComponent />
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        }}
      />
    </div>


  );
}
export default TransitionMotion;
