import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "๐": "Smiling",
  "๐ณ": "disbelief",
  "๐": "sad",
  "๐ฅก": "takeout box",
  "โค๏ธ": "love",
  "๐": "grinning face with sweat",
  "๐คฃ": "rolling on the floor laughing",
  "๐": "face with tears of joy",
  "๐": "slightly smiling face",
  "๐": "upside-down face",
  "๐": "winking face",
  "๐": "smiling face with smiling eyes",
  "๐": "smiling face with halo",
  "๐ฅฐ": "smiling face with hearts",
  "๐คฉ": "star-struck",
  "๐": "face blowing a kiss",
  "๐ค": "money-mouth face",
  "๐ค": "hugging face",
  "๐คญ": "face with hand over mouth",
  "๐คซ": "shushing face",
  "๐ค": "thinking face",
  "๐ค": "zipper-mouth face",
  "๐คจ": "face with raised eyebrow"
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
            Made with โค by Abhay <br />
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
