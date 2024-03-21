import React, { useState, useEffect } from 'react';
import './App.css';

const tarotCards = [
  { name: 'The Fool', image: 'tarot_cards/0-Fool.jpg', description: 'The Fool represents new beginnings.' },
  { name: 'The Magician', image: 'tarot_cards/1-Magician.jpg', description: 'The Magician represents manifestation and resourcefulness.' },
  { name: 'The High Priestess', image: 'tarot_cards/2-High_Priestess.jpg', description: 'The High Priestess represents intuition and mystery.' },
  { name: 'The Empress', image: 'tarot_cards/3-Empress.jpg', description: 'The Empress represents nurturing and abundance.' },
  { name: 'The Emperor', image: 'tarot_cards/4-Emperor.jpg', description: 'The Emperor represents authority and structure.' },
  { name: 'The Hierophant', image: 'tarot_cards/5-Hierophant.jpg', description: 'The Hierophant represents tradition and spiritual guidance.' },
  { name: 'The Lovers', image: 'tarot_cards/6-Lovers.jpg', description: 'The Lovers represent relationships and choices.' },
  { name: 'The Chariot', image: 'tarot_cards/7-Chariot.jpg', description: 'The Chariot represents determination and willpower.' },
  { name: 'Justice', image: 'tarot_cards/8-Justice.jpg', description: 'Justice represents fairness and balance.' },
  { name: 'The Hermit', image: 'tarot_cards/9-Hermit.jpg', description: 'The Hermit represents introspection and soul-searching.' },
  { name: 'Wheel of Fortune', image: 'tarot_cards/10-Wheel_of_Fortune.jpg', description: 'The Wheel of Fortune represents destiny and change.' },
  { name: 'Strength', image: 'tarot_cards/11-Strength.jpg', description: 'Strength represents inner strength and courage.' },
  { name: 'The Hanged Man', image: 'tarot_cards/12-Hanged_Man.jpg', description: 'The Hanged Man represents surrender and letting go.' },
  { name: 'Death', image: 'tarot_cards/13-Death.jpg', description: 'Death represents transformation and endings.' },
  { name: 'Temperance', image: 'tarot_cards/14-Temperance.jpg', description: 'Temperance represents balance and moderation.' },
  { name: 'The Devil', image: 'tarot_cards/15-Devil.jpg', description: 'The Devil represents materialism and bondage.' },
  { name: 'The Tower', image: 'tarot_cards/16-Tower.jpg', description: 'The Tower represents sudden upheaval and chaos.' },
  { name: 'The Star', image: 'tarot_cards/17-Star.jpg', description: 'The Star represents hope and inspiration.' },
  { name: 'The Moon', image: 'tarot_cards/18-Moon.jpg', description: 'The Moon represents illusion and subconscious.' },
  { name: 'The Sun', image: 'tarot_cards/19-Sun.jpg', description: 'The Sun represents success and vitality.' },
  { name: 'Judgement', image: 'tarot_cards/20-Judgement.jpg', description: 'Judgement represents self-reflection and awakening.' },
  { name: 'The World', image: 'tarot_cards/21-World.jpg', description: 'The World represents completion and fulfillment.' }
  // add more cards as needed
];

function App() {
  const [card, setCard] = useState(null);

  useEffect(() => {
    generateCard();
  }, []);

  const generateCard = () => {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    setCard(tarotCards[randomIndex]);
  };

  return (
    <div className="App">
      <h1>Tarot Card Generator</h1>
      {card && (
        <div>
          <h2>{card.name}</h2>
          <img src={card.image} alt={card.name} />
          <p>{card.description}</p>
        </div>
      )}
      <button onClick={generateCard}>Generate New Card</button>
    </div>
  );
}

export default App;