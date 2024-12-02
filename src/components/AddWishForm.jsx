import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AddWishForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    link: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ name: '', description: '', price: '', link: '' });
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit} 
      className="bg-holiday-snow/10 backdrop-blur-md rounded-xl p-8 mb-12 max-w-2xl mx-auto shadow-xl border border-holiday-frost/20"
    >
      <div className="space-y-5">
        <input
          className="w-full rounded-lg bg-holiday-snow/90 border-0 focus:ring-2 focus:ring-holiday-gold/50 px-4 py-3 text-gray-800 placeholder-gray-500"
          placeholder="✨ What's your wish?"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <textarea
          className="w-full rounded-lg bg-holiday-snow/90 border-0 focus:ring-2 focus:ring-holiday-gold/50 px-4 py-3 text-gray-800 placeholder-gray-500"
          placeholder="Add some details..."
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          rows="2"
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            className="rounded-lg bg-holiday-snow/90 border-0 focus:ring-2 focus:ring-holiday-gold/50 px-4 py-3 text-gray-800 placeholder-gray-500"
            placeholder="Price"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
            required
          />
          <input
            className="rounded-lg bg-holiday-snow/90 border-0 focus:ring-2 focus:ring-holiday-gold/50 px-4 py-3 text-gray-800 placeholder-gray-500"
            placeholder="Link to item"
            value={formData.link}
            onChange={(e) => setFormData({...formData, link: e.target.value})}
            required
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-holiday-gold text-holiday-pine py-3 rounded-lg hover:bg-holiday-gold/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
        >
          Add to Wishlist ❄️
        </motion.button>
      </div>
    </motion.form>
  );
}