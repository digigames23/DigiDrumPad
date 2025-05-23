import { useState, useEffect } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Controller from "./components/Controller";
import "bootstrap/dist/css/bootstrap.min.css";
import { soundsName, soundsGroup } from "./components/Keyboard";

const App = () => {
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(1);
  const [soundName, setSoundName] = useState("");
  const [soundType, setSoundType] = useState("heaterKit");
  const [sounds, setSounds] = useState(soundsGroup[soundType]);

  useEffect(() => {
    document.body.style = "background: #D5A021;";
  }, []);

  const play = (key, sound) => {
    setSoundName(sound);
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
  };

  const changeSoundsGroup = () => {
    setSoundName("");
    if (soundType === "heaterKit") {
      setSoundType("smoothPianoKit");
      setSounds(soundsGroup.smoothPianoKit);
    } else {
      setSoundType("heaterKit");
      setSounds(soundsGroup.heaterKit);
    }
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const setKeyVolume = () => {
    const audios = sounds.map((sound) => document.getElementById(sound.key));
    audios.forEach((audio) => {
      if (audio) {
        audio.volume = volume;
      }
    });
  };

  const stop = () => {
    setPower(!power);
  };

  return (
    <div id="drum-machine">
      {setKeyVolume()}
      <Keyboard play={play} sounds={sounds} power={power} />
      <Controller
        stop={stop}
        volume={volume}
        power={power}
        name={soundName || soundsName[soundType]}
        changeSoundsGroup={changeSoundsGroup}
        handleVolumeChange={handleVolumeChange}
      />
    </div>
  );
};

export default App;
