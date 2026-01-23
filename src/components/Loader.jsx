import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 bg-[#1f232a] flex items-center justify-center z-[9999]"
    >
      <div className="flex flex-col items-center gap-6">

        {/* Logo */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white tracking-wider"
        >
          AW<span className="text-yellow-400">.</span>
        </motion.h1>

        {/* Running Loading Text */}
        <div className="flex space-x-1 text-yellow-400 text-sm tracking-widest">
          {"LOADING".split("").map((char, i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.12,
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-white/10 rounded overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-yellow-400"
          />
        </div>
      </div>
    </motion.div>
  );
}

export { Loader };
export default Loader;
