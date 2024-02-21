// components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button onClick={() => changeLanguage('en')} className="text-white">
        English
      </button>
      <span className="text-white">|</span>
      <button onClick={() => changeLanguage('ja')} className="text-white">
        日本語
      </button>
    </div>
  );
};

export default LanguageSwitcher;
