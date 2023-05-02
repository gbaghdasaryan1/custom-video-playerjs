import { useState, useEffect, useCallback } from "react";

const useVideoPlayer = (videoElement: HTMLMediaElement | null) => {
	const [playerState, setPlayerState] = useState({
		isPlaying: false,
		progress: 0,
		speed: 1,
		isMuted: true,
		volume: '0.5',
		lastVolume: '0.5',
		autoPlay: false
	});

	const togglePlay = useCallback(() => {
		setPlayerState({
			...playerState,
			isPlaying: !playerState.isPlaying,
		});
	}, [playerState]);

	const handleChangeVolume = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		if (videoElement && videoElement) videoElement.volume = Number(event.target.value);
		setPlayerState({
			...playerState,
			volume: event.target.value,
			lastVolume: event.target.value,
			isMuted: false
		});
	}, [playerState, videoElement]);

	const toggleAutoPlay = () => {
		if (videoElement && playerState.autoPlay) {
			videoElement.play();
			setPlayerState({
				...playerState,
				isPlaying: true,
				autoPlay: true
			});
		} else {
			setPlayerState({
				...playerState,
				autoPlay: false
			});
		}
	};



	useEffect(() => {
		if (videoElement && playerState.autoPlay) {
			videoElement.autoplay = true;
		}
		playerState.isPlaying
			? videoElement?.play()
			: videoElement?.pause();
	}, [playerState.isPlaying, videoElement, togglePlay, playerState.autoPlay]);

	const handleOnTimeUpdate = () => {
		if (videoElement && playerState.isPlaying) {

			const progress = (videoElement.currentTime / videoElement?.duration) * 100;
			setPlayerState({
				...playerState,
				progress,
			});
		}
	};

	const handleVideoProgress = (event: React.ChangeEvent<HTMLInputElement>) => {
		const manualChange = Number(event.target.value);
		if (videoElement) {
			videoElement.currentTime = (videoElement.duration / 100) * manualChange;
			setPlayerState({
				...playerState,
				progress: manualChange,
			});
		}
	};

	const handleVideoSpeed = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const speed = Number(event.target.value);
		if (videoElement) {
			videoElement.playbackRate = speed;
			setPlayerState({
				...playerState,
				speed,
			});
		}
	};

	const toggleMute = () => {
		setPlayerState({
			...playerState,
			isMuted: !playerState.isMuted,
			volume: playerState.isMuted ? playerState.lastVolume : '0'
		});
	};


	return {
		playerState,
		togglePlay,
		handleOnTimeUpdate,
		handleVideoProgress,
		handleVideoSpeed,
		toggleMute,
		handleChangeVolume,
		toggleAutoPlay
	};
};

export default useVideoPlayer;
