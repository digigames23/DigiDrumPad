import KeyboardKey from "./KeyboardKey";
import firstSoundsGroup from "../utils/firstSoundsGroup";
import secondSoundsGroup from "../utils/secondSoundsGroup";
import "./Keyboard.css";

export const soundsName = {
  heaterKit: "Heater Kit",
  smoothPianoKit: "Smooth Piano Kit",
};

export const soundsGroup = {
  heaterKit: firstSoundsGroup,
  smoothPianoKit: secondSoundsGroup,
};

const Keyboard = ({ power, play, sounds }) => {
  return (
    <div className="drum-keyboard">
      {power
        ? sounds.map((sound) => (
            <KeyboardKey key={sound.key} play={play} sound={sound} />
          ))
        : sounds.map((sound) => (
            <KeyboardKey
              key={sound.key}
              play={play}
              sound={{ ...sound, url: "#" }}
            />
          ))}
    </div>
  );
};

export default Keyboard;
