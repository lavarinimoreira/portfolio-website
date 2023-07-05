import { useRef, useState } from "react";
import { Container } from "./styles";

import { GiPlayButton, GiPauseButton } from "react-icons/gi";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElem: any = useRef();

  const PlayPause = () => {
    if (isPlaying) {
      audioElem.current.pause();
    } else {
      audioElem.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Container onClick={PlayPause}>
      {isPlaying ? <GiPauseButton /> : <GiPlayButton />}
      <audio ref={audioElem} src="/audio/neon-gaming.mp3" />
    </Container>
  );
}

export default Player;
