import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';

export default function AddWishForm({ onAdd, isChildMode }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    link: '',
    image: null
  });
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    setFormData(prev => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {'image/*': []},
    multiple: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ name: '', description: '', price: '', link: '', image: null });
    setPreview(null);
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit} 
      className="bg-holiday-snow/10 backdrop-blur-md rounded-xl p-8 mb-12 max-w-2xl mx-auto shadow-xl border border-holiday-frost/20"
    >
      <div className="space-y-5">
        <div {...getRootProps()} className="cursor-pointer">
          <input {...getInputProps()} />
          <div className={`h-48 rounded-lg border-2 border-dashed ${isDragActive ? 'border-holiday-red' : 'border-holiday-frost'} flex items-center justify-center transition-colors duration-300`}>
            {preview ? (
              <img src={preview} alt="Preview" className="h-full w-full object-contain rounded-lg" />
            ) : (
              <p className="text-holiday-frost text-center text-lg">
                {isDragActive ? ('drop_picture') : isChildMode ? ('add_picture_child') : ('add_picture')}
              </p>
            )}
          </div>
        </div>

        <input
          className={`w-full rounded-lg bg-holiday-snow/90 border-0 focus:ring-2 focus:ring-holiday-red/50 px-4 ${isChildMode ? 'py-4 text-lg' : 'py-3'} text-gray-800 placeholder-gray-500`}
          placeholder={isChildMode ? ('what_do_you_want') : ('whats_your_wish')}
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />

        {!isChildMode && (
          <>
            <textarea
              className="w-full rounded-lg bg-holiday-snow/90 border-0 focus:ring-2 focus:ring-holiday-red/50 px-4 py-3 text-gray-800 placeholder-gray-500"
              placeholder={('add_details')}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows="2"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                className="rounded-lg bg-holiday-snow/90 border-0 focus:ring-2 focus:ring-holiday-red/50 px-4 py-3 text-gray-800 placeholder-gray-500"
                placeholder={('price')}
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                required
              />
              <input
                className="rounded-lg bg-holiday-snow/90 border-0 focus:ring-2 focus:ring-holiday-red/50 px-4 py-3 text-gray-800 placeholder-gray-500"
                placeholder={('link_to_item')}
                value={formData.link}
                onChange={(e) => setFormData({...formData, link: e.target.value})}
                required
              />
            </div>
          </>
        )}

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full bg-holiday-red text-white px-6 ${isChildMode ? 'py-4 text-lg' : 'py-3'} rounded-full hover:bg-holiday-red/90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium`}
        >
          {isChildMode ? ('add_my_wish') : ('add_wish')}
        </motion.button>
      </div>
    </motion.form>
  );
}