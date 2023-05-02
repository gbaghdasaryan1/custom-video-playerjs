import { FC } from "react";

type Props = {
	toggleAutoPlay: () => void;
	autoPlay: boolean
}
const Autoplay: FC<Props> = ({autoPlay,toggleAutoPlay}) => {
	return (
		<button onClick={toggleAutoPlay}>
						Autoplay video
						<span>{autoPlay && 'a'}</span>
					</button>
	);
};

export default Autoplay;
