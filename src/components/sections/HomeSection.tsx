import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface HomeSectionProps {
  onSectionChange: (section: string) => void;
}

export function HomeSection({ onSectionChange }: HomeSectionProps) {
  return (
    <section className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="space-heading text-4xl md:text-6xl text-space-sun mb-6"
            animate={{ 
              textShadow: [
                "0 0 20px #FFD700",
                "0 0 30px #FFD700", 
                "0 0 20px #FFD700"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌟 Stellar Stories 🌟
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-3xl mb-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Space Weather Through the Eyes of Earthlings
          </motion.h2>
        </motion.div>

        {/* Animated Hero Image */}
        <motion.div
          className="relative mb-12 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1730817965323-fdf37f70aedc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwc3BhY2UlMjBzdW4lMjBlYXJ0aCUyMGF1cm9yYXxlbnwxfHx8fDE3NTkzNDYxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Space weather visualization showing Sun, Earth, and aurora"
              className="w-full max-w-lg rounded-xl shadow-2xl"
            />
            
            {/* Floating particles around the image */}
            <motion.div
              className="absolute top-0 left-0 w-4 h-4 bg-space-sun rounded-full"
              animate={{
                x: [0, 20, 0],
                y: [0, -15, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-10 right-5 w-3 h-3 bg-space-aurora-pink rounded-full"
              animate={{
                x: [0, -15, 0],
                y: [0, 10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-5 left-10 w-5 h-5 bg-space-earth-blue rounded-full"
              animate={{
                x: [0, 10, 0],
                y: [0, -20, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            />
          </div>
        </motion.div>

        {/* Introduction Text */}
        <motion.div
          className="text-center mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Hey kids! 👋 Did you know that our Sun creates amazing space weather? 
            Solar storms, flares, and winds travel through space and can affect 
            satellites, power grids, and even create beautiful auroras! 🌌
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Join us on an incredible journey to explore space weather through 
            fun stories, interactive games, and chat with our space robot! 🚀🌞
          </p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <motion.button
            onClick={() => onSectionChange("learn")}
            className="bg-space-orange text-white px-8 py-4 rounded-xl text-lg space-heading shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 25px rgba(255, 152, 0, 0.5)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            🚀 Explore Stories
          </motion.button>
          
          <motion.button
            onClick={() => onSectionChange("play")}
            className="bg-space-earth-green text-white px-8 py-4 rounded-xl text-lg space-heading shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 25px rgba(76, 175, 80, 0.5)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            🎮 Play Games
          </motion.button>
          
          <motion.button
            onClick={() => onSectionChange("interact")}
            className="bg-space-aurora-purple text-white px-8 py-4 rounded-xl text-lg space-heading shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 25px rgba(156, 39, 176, 0.5)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            🤖 Ask AstroBot
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}