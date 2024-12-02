import { motion } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

export default function WishCard({ wish, onRemove }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-holiday-snow/95 backdrop-blur-md rounded-xl p-6 relative shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-holiday-frost/30"
    >
      <motion.button
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onRemove(wish.id)}
        className="absolute top-4 right-4 text-holiday-berry/70 hover:text-holiday-berry transition-colors duration-300"
      >
        <FaTimes />
      </motion.button>

      <h3 className="text-xl font-semibold text-holiday-pine mb-3">{wish.name}</h3>
      <p className="text-gray-600 mb-3 text-sm leading-relaxed">{wish.description}</p>
      <p className="text-holiday-berry font-medium mb-3 text-lg">${wish.price}</p>
      <motion.a 
        whileHover={{ scale: 1.02 }}
        href={wish.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-holiday-gold hover:text-holiday-gold/80 transition-colors duration-300 inline-flex items-center gap-2 text-sm font-medium"
      >
        View Item <FaExternalLinkAlt className="text-xs" />
      </motion.a>
    </motion.div>
  );
}