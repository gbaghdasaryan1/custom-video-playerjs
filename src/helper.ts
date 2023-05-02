export function formatTime(seconds: number) {
	let minutes = Math.floor(seconds / 60);
	let remainingSeconds = Number(seconds % 60).toFixed();

	// Add leading zero if necessary
	if (Number(remainingSeconds) < 10) {
		remainingSeconds = "0" + remainingSeconds;
	}

	return `${minutes}:${remainingSeconds}`;
}
