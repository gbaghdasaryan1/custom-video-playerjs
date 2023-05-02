import React, { FC } from 'react';
import './progress-bar.css'
type Props = {
	currentTime: number,
	duration: number,
	progress: number,
	handleVideoProgress: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ProgressBar: FC<Props> = ({currentTime,duration,progress,handleVideoProgress}) => {

	
	return (
		<div className="progress-bar-wrapper">
						<div className="progress-bar">
							<div className="progress-bar-filled" style={{
								width:  (currentTime / duration) * 100 + "%"
							}}>
							</div>
							<input
								min={'0'}
								max={"100"}
								step="0.001"
								type="range"
								value={progress}
								onChange={handleVideoProgress}

							/>
						</div>
					</div>
	);
};

export default ProgressBar;
