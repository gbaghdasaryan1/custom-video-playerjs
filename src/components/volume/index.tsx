import { FC } from "react";
import './volume.css';

type Props = {
	volume: string;
	isMuted: boolean;
	handleChangeVolume: (event: React.ChangeEvent<HTMLInputElement>) => void,
	toggleMute: () => void
}
const Volume: FC<Props> = ({volume,isMuted,handleChangeVolume,toggleMute}) => {
	return (
		<button className="mute-btn" >
							{!isMuted ? (
								<i className="bx bxs-volume-full" onClick={toggleMute}></i>
							) : (
								<i className="bx bxs-volume-mute" onClick={toggleMute}></i>
							)}
						<div className="volume-popup">

							<div className="volume-progress">
								<div className="volume-progress-wrapper" style={{
									width: `${Number(volume) * 100}%`
								}}>
								<input
								id="myinput"
								type="range"
								min="0"
								max="1"
								step="0.01"
								value={volume}
								onChange={ handleChangeVolume} />
								</div>
							</div>
						</div>
					</button>
	);
};

export default Volume;
