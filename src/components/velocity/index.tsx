import { FC } from "react";
import './velocity.css'

type Props = {
	speed: number,
	handleVideoSpeed: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Velocity: FC<Props> = ({speed,handleVideoSpeed}) => {
	return (
		<select
						className="velocity"
						value={speed}
						onChange={handleVideoSpeed}
					>
						<option value="0.50">0.50x</option>
						<option value="1">1x</option>
						<option value="1.25">1.25x</option>
						<option value="2">2x</option>
					</select>
	);
};

export default Velocity;
