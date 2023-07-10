import React from 'react';

function EmojiSelector({ onSelect }) {
  const emojis = ['😄', '🥳', '🎉', '🎈', '🤩', '😎'];

  return (
    <div>
      <h2>Select an Emoji</h2>
      <div className="emoji-container">
        {emojis.map(emoji => (
          <span
            key={emoji}
            className="emoji"
            onClick={() => onSelect(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}

export default EmojiSelector;