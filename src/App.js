import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😅": "grinning face with sweat",
  "🤣": "rolling on the floor laughing",
  "😂": "face with tears of joy",
  "🙂": "slightly smiling face",
  "🙃": "upside-down face",
  "😉": "winking face",
  "😊": "smiling face with smiling eyes",
  "😇": "smiling face with halo",
  "🥰": "smiling face with hearts",
  "🤩": "star-struck",
  "😘": "face blowing a kiss",
  "🤑": "money-mouth face",
  "🤗": "hugging face",
  "🤭": "face with hand over mouth",
  "🤫": "shushing face",
  "🤔": "thinking face",
  "🤐": "zipper-mouth face",
  "🤨": "face with raised eyebrow"
};

/**
 * Bonus feature
 * converting an object to array of keys
 */
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    /** concept 3 is onchange */
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2> {/** Concept 1: JSX */}
      <h3> {meaning} </h3> {/** how much part is re-rendered. */}
      {
        /** Bonus feature; if time permmits */
        /**
         * concepts to cover: mapping a list
         * click handler on list item
         */
        emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))
      }
      <footer class="main-footer">
        <div class="footer-content">
          <p class="footer-text">
            Made with ❤ by Abhay <br />
          </p>

          <div className="social">
            <a href="" target="_blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="" target="_blank">
              {" "}
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="" target="_blank">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
