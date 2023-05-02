import { FC } from "react";
import './duration.css';
import { formatTime } from "../../helper";

type Props = {
	currentTime: number;
	duration: number
}
const Duration: FC<Props> = ({currentTime,duration}) => {
	const current = formatTime(currentTime)
	const durationTime = formatTime(duration)
	return (
		<div className="duration">
			<span className="current-time">{current}</span>
			/
			<span className="max-duration">{(durationTime)}</span>
		</div>
	);
};

export default Duration;
