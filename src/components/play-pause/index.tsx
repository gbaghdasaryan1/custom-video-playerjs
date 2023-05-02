import  { FC } from 'react';
import './play-pause.css';

type Props = {
	togglePlay: VoidFunction,
	isPlaying: boolean
}

const PlayPause: FC<Props> = ({isPlaying,togglePlay}) => {
	return (
		<div className="actions">
						<button onClick={togglePlay}>
							{!isPlaying ? (
								<i className="bx bx-play"></i>
							) : (
								<i className="bx bx-pause"></i>
							)}
						</button>
					</div>
	);
};

export default PlayPause;
