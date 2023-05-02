import { useRef, useEffect, FC } from 'react';
import './player.css';
import useVideoPlayer from "../../hooks/useVideoPlayer";
import ProgressBar from "../progress-bar";
import PlayPause from "../play-pause";
import Velocity from "../velocity";
import Volume from "../volume";
import Autoplay from "../autoplay";
import VideoWrapper from "../video-wrapper";
import ControlBar from "../control-bar";
import Duration from "../duration";

type Props = {
	src: string;
};

export const Player: FC<Props> = ({ src }) => {

	const videoElement = useRef<HTMLVideoElement | null>(null);
	const {
		playerState,
		togglePlay,
		handleOnTimeUpdate,
		handleVideoProgress,
		handleVideoSpeed,
		toggleMute,
		handleChangeVolume,
		toggleAutoPlay

	} = useVideoPlayer(videoElement.current);


	useEffect(() => {
		if (videoElement?.current && playerState.autoPlay) {
			videoElement?.current.play();
			togglePlay();
		}
	}, [playerState.autoPlay]);

	return (
				<VideoWrapper>

				<video
					src={src}
					ref={videoElement}
					onTimeUpdate={handleOnTimeUpdate}
					onClick={togglePlay}
					muted={playerState.isMuted}
					autoPlay={playerState.autoPlay}
				>
					<source src={src}></source>
					Your browser does not support the video tag.
				</video>

					{videoElement.current && 
					<ProgressBar 
						currentTime={videoElement?.current?.currentTime} 
						duration={videoElement?.current?.duration} 
						progress={playerState.progress}
						handleVideoProgress={handleVideoProgress}/>
						}


				<ControlBar >
					<PlayPause isPlaying={playerState.isPlaying} togglePlay={togglePlay}/>
					
					{/* <Velocity speed={playerState.speed} handleVideoSpeed={handleVideoSpeed}/> */}

					<Volume volume={playerState.volume} isMuted={playerState.isMuted} toggleMute={toggleMute} handleChangeVolume={handleChangeVolume}/>
					{videoElement.current && <Duration currentTime={videoElement?.current?.currentTime} duration={videoElement?.current?.duration}/>}

					<Autoplay autoPlay={playerState.autoPlay} toggleAutoPlay={toggleAutoPlay}/>
				</ControlBar>
					</VideoWrapper>
	);
};

