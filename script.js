const form = document.querySelector('form');
const input = document.querySelector('input[type="file"]');
const galeria = document.querySelector('.galeria');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const files = input.files;

	for (let i = 0; i < files.length; i++) {
		const file = files[i];
		const reader = new FileReader();

		reader.addEventListener('load', (event) => {
			const img = document.createElement('img');
			img.src = event.target.result;
			galeria.appendChild(img);
		});

		reader.readAsDataURL(file);
	}
});
