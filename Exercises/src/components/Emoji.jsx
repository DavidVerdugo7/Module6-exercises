import { useState } from "react";

function EmojiChanger() {
  const emojis = ["😊", "😹", "🇯🇲", "🐶", "🍿"];
  const [emojiIndex, setEmojiIndex] = useState("0");

  const changeEmoji = () => {
    // Incrementa el índice para cambiar al siguiente emoji
    const nextEmoji = (emojiIndex + 1) % emojis.length;
    setEmojiIndex(nextEmoji);
  };

  return (
    <div className="MoodChanger componentBox">
      {" "}
      <p>Current Emoji: {emojis[emojiIndex]}</p>
      <button onClick={() => changeEmoji()}> EmojiChanger </button>
    </div>
  );
}
export default EmojiChanger;
