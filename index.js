const constraints = {
  audio: false,
  video: {
    width: { min: 1280 },
    height: { min: 720 },
  },
};

const Camera = {
	getDevices() {
		navigator.mediaDevices.enumerateDevices().then(devices => {
			// console.log(JSON.stringify(devices));
			const cameras = devices.filter(device => device.kind === 'videoinput');
			console.log(JSON.stringify(cameras));
			const [camera] = cameras;
			Camera.getMedia();
		}).catch(err => console.log(err));
	},
	getMedia() {
		console.log(666);
		navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(mediaStream => {
			console.log(777);
			const video = document.querySelector('video');
			video.src = window.URL.createObjectURL(mediaStream);
			video.onloadedmetadata = function(e) {
				console.log(e);
			};
		}).catch(err => console.log(err));
	}
};

document.addEventListener('DOMContentLoaded', event => Camera.getDevices());