import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import { FaGift } from 'react-icons/fa';
import WishCard from './components/WishCard';
import AddWishForm from './components/AddWishForm';

export default function App() {
  const [wishes, setWishes] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const savedWishes = Cookies.get('wishes');
    if (savedWishes) setWishes(JSON.parse(savedWishes));
  }, []);

  const addWish = (wish) => {
    const newWishes = [...wishes, { ...wish, id: Date.now() }];
    setWishes(newWishes);
    Cookies.set('wishes', JSON.stringify(newWishes));
  };

  const removeWish = (id) => {
    const newWishes = wishes.filter(w => w.id !== id);
    setWishes(newWishes);
    Cookies.set('wishes', JSON.stringify(newWishes));
  };

  const shareList = () => {
    const url = `${window.location.origin}?wishes=${encodeURIComponent(JSON.stringify(wishes))}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-holiday-pine via-[#1F2F37] to-holiday-pine/90 p-8 font-sans">
      <motion.h1 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl font-light text-white text-center mb-12 flex items-center justify-center gap-3"
      >
        <span className="tracking-wide">My Wishlist</span>
        <motion.span
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <FaGift className="text-4xl opacity-90" />
        </motion.span>
      </motion.h1>

      <AddWishForm onAdd={addWish} />

      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        layout
      >
        {wishes.map(wish => (
          <WishCard key={wish.id} wish={wish} onRemove={removeWish} />
        ))}
      </motion.div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md p-4 text-center border-t border-white/10">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={shareList}
          className="bg-holiday-gold text-holiday-pine px-6 py-2.5 rounded-full hover:bg-holiday-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {copied ? '✨ Link Copied!' : '🎄 Share Wishlist'}
        </motion.button>
      </div>
    </div>
  );
}