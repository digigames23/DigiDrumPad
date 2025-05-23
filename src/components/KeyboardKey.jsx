import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./KeyboardKey.css";

const KeyboardKey = ({ play, sound: { id, key, url, keyCode } }) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === keyCode) {
      play(key, id);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Button
      id={keyCode}
      className="drum-pad"
      variant="dark"
      onClick={() => play(key, id)}
    >
      <audio className="clip" id={key} src={url}></audio>
      {key}
    </Button>
  );
};

export default KeyboardKey;
