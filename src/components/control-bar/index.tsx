import { FC, ReactNode } from "react";
import './control-bar.css';

type Props = {
	children: ReactNode | JSX.Element
}

const ControlBar: FC<Props> = ({children}) => {
	return (
		<div className="controls">
			{children}
		</div>
	);
};

export default ControlBar;
