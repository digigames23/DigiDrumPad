import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Controller.css";

const Controller = ({
  name,
  stop,
  volume,
  power,
  handleVolumeChange,
  changeSoundsGroup,
}) => {
  return (
    <div className="drum-controller">
      <Button className="switch" variant="dark" onClick={stop}>
        Turn {power ? "OFF" : "ON"}
      </Button>
      <Form.Label className="volume-level">
        Volume: %{Math.round(volume * 100)}
      </Form.Label>
      <Form.Range
        max="1"
        min="0"
        step="0.01"
        type="range"
        value={volume}
        onChange={handleVolumeChange}
      />
      <h2 id="display" className="sound__type">
        {name}
      </h2>
      <Button onClick={changeSoundsGroup} variant="dark">
        Change Sounds Group
      </Button>
    </div>
  );
};

export default Controller;
