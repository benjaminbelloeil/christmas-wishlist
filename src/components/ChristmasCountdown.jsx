import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaSleigh } from 'react-icons/fa';

export default function ChristmasCountdown() {
  const [timeUntilChristmas, setTimeUntilChristmas] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const today = new Date();
      const christmas = new Date(today.getFullYear(), 11, 25);
      if (today.getMonth() === 11 && today.getDate() > 25) {
        christmas.setFullYear(christmas.getFullYear() + 1);
      }
      
      const diff = christmas.getTime() - today.getTime();
      
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000)
      };
    };

    const timer = setInterval(() => {
      setTimeUntilChristmas(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const sleighVariants = {
    animate: {
      x: [-100, window.innerWidth + 100],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-center mb-4 p-2 relative"
    >
      <motion.div
        variants={sleighVariants}
        animate="animate"
        className="absolute top-0 text-holiday-red text-3xl"
      >
        <FaSleigh />
      </motion.div>
      
      <div className="text-2xl md:text-4xl font-bold text-holiday-snow mb-2 flex justify-center gap-2">
        <TimeUnit value={timeUntilChristmas.days} unit={('days')} />
        <TimeUnit value={timeUntilChristmas.hours} unit={('hours')} />
        <TimeUnit value={timeUntilChristmas.minutes} unit={('minutes')} />
        <TimeUnit value={timeUntilChristmas.seconds} unit={('seconds')} />
      </div>
      
      <div className="text-holiday-snow/80 text-sm md:text-lg">
        {('countdown_to_christmas')}
      </div>
    </motion.div>
  );
}

const TimeUnit = ({ value, unit }) => (
  <div className="flex flex-col items-center">
    <span>{String(value).padStart(2, '0')}</span>
    <span className="text-xs font-normal opacity-80">{unit}</span>
  </div>
);