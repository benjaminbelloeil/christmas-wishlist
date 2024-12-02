import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import { FaChild, FaUser } from 'react-icons/fa';
import WishCard from './components/WishCard';
import AddWishForm from './components/AddWishForm';
import Snowfall from 'react-snowfall';
import ChristmasCountdown from './components/ChristmasCountdown';

export default function App() {
  const [wishes, setWishes] = useState([]);
  const [copied, setCopied] = useState(false);
  const [isChildMode, setIsChildMode] = useState(false);
  
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
    <div className="min-h-screen bg-gradient-to-br from-holiday-pine via-[#1F2F37] to-holiday-pine/90 p-4 pb-16 font-sans relative">
      <Snowfall
        snowflakeCount={200}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      />
      
      <div className="flex justify-end mb-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsChildMode(!isChildMode)}
          className="bg-holiday-red text-white px-4 py-2 rounded-full hover:bg-holiday-red/90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium flex items-center gap-2"
        >
          {isChildMode ? (
            <>
              <FaChild className="text-lg" />
              Adult Mode
            </>
          ) : (
            <>
              <FaUser className="text-lg" />
              Kid Mode
            </>
          )}
        </motion.button>
      </div>

      <ChristmasCountdown />

      <AddWishForm onAdd={addWish} isChildMode={isChildMode} />

      <motion.div 
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        layout
      >
        {wishes.map(wish => (
          <WishCard key={wish.id} wish={wish} onRemove={removeWish} />
        ))}
      </motion.div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md p-2 text-center border-t border-white/10">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={shareList}
          className="bg-holiday-red text-white px-4 py-2 rounded-full hover:bg-holiday-red/90 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {copied ? '✨ Link Copied!' : '🎄 Share Wishlist'}
        </motion.button>
      </div>
    </div>
  );
}