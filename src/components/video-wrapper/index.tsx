import  { FC, ReactNode } from 'react';
import './video-wrapper.css';

type Props = {
	children: ReactNode | JSX.Element
}

const VideoWrapper: FC<Props> = ({children}) => {
	return (
		<div className="container">
			<div className="video-wrapper">
			{children}
			</div>
		</div>
	);
};

export default VideoWrapper;
