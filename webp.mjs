import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

imagemin(["./src/assets/images/*.{jpg,png}"], {
	destination: "./src/assets/webp/",
	plugins: [
		imageminWebp({
      quality: 90
		}),
	],
}).then(() => {
	console.log("Images Converted Successfully!!!");
});