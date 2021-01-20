import React from "react";
import "./AyahCard.scss";

const AyahCard = (props) => {
  const { surahNumber, number, text, numberInSurah, textTranslation } = props;
  const handleTranslation = () =>
    textTranslation.map((translation) =>
      number === translation.number ? translation.text : ""
    );
  console.log(props);
  return (
    <div className="ayah-card">
      <div className="surah">
        <span className="number-surah">{`${surahNumber}:${numberInSurah}`}</span>
        <div className="text-ayah">{text}</div>
      </div>
      <div className="text-translate">
        <p className="text-transliteration">bismi laahi rrahmaani rrahiim</p>
        <p className="text-translation">{handleTranslation()}</p>
      </div>
    </div>
  );
};

export default AyahCard;
