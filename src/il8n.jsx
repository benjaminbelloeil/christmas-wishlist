// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to Christmas Wishlist",
      "add_wish": "Add to Wishlist ✨",
      "child_mode": "Kid Mode",
      "adult_mode": "Adult Mode",
      "share_wishlist": "🎄 Share Wishlist",
      "link_copied": "✨ Link Copied!",
      "drop_picture": "📸 Drop picture here!",
      "add_picture_child": "📸 Add a picture of your wish!",
      "add_picture": "Drag & drop an image or click to select",
      "what_do_you_want": "🎁 What do you want?",
      "whats_your_wish": "✨ What's your wish?",
      "add_details": "Add some details...",
      "price": "Price",
      "link_to_item": "Link to item",
      "add_my_wish": "🎁 Add My Wish!",
      "view_item": "View Item",
      "countdown_to_christmas": "Countdown to Christmas 🎄",
      "days": "Days",
      "hours": "Hours",
      "minutes": "Minutes",
      "seconds": "Seconds"
    }
  },
  es: {
    translation: {
      "welcome": "Bienvenido a la Lista de Deseos de Navidad",
      "add_wish": "Agregar a la Lista de Deseos ✨",
      "child_mode": "Modo Niño",
      "adult_mode": "Modo Adulto",
      "share_wishlist": "🎄 Compartir Lista de Deseos",
      "link_copied": "✨ ¡Enlace Copiado!",
      "drop_picture": "📸 ¡Suelta la imagen aquí!",
      "add_picture_child": "📸 ¡Agrega una foto de tu deseo!",
      "add_picture": "Arrastra y suelta una imagen o haz clic para seleccionar",
      "what_do_you_want": "🎁 ¿Qué quieres?",
      "whats_your_wish": "✨ ¿Cuál es tu deseo?",
      "add_details": "Agrega algunos detalles...",
      "price": "Precio",
      "link_to_item": "Enlace al artículo",
      "add_my_wish": "🎁 ¡Agregar Mi Deseo!",
      "view_item": "Ver Artículo",
      "countdown_to_christmas": "Cuenta regresiva para Navidad 🎄",
      "days": "Días",
      "hours": "Horas",
      "minutes": "Minutos",
      "seconds": "Segundos"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;