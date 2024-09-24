document.getElementById("formImageGeneration").addEventListener("submit", query)

async function query(e) {
	e.preventDefault();
	const adjectives = ["fun", "cute", "adventurous", "master", "adorable", "strong", "beautiful", "happy", "smiling", "hungry", "relaxed"]
	let adjective = adjectives[Math.floor(Math.random() * adjectives.length)]

	const animal = "praying mantis"
	const cuisine = document.getElementById('theme-select').value;
	const prompt = `Avatar of a ${adjective} ${animal} with a theme of ${cuisine}`
	const data = {"inputs": prompt}
	console.log("Prompt: "+ prompt)

	const existingImages = document.querySelectorAll('.generated-image');
	existingImages.forEach(img => img.remove());

	try {
		const loadingElement = document.createElement('p');
		loadingElement.textContent = 'Generating image...';
		document.querySelector('.image-container').appendChild(loadingElement);

		const response = await fetch(
			"https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
			{
				headers: {
					Authorization: `Bearer ${API_KEY}`,
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(data),
			}
		);
		const result = await response.blob();
		if (!response.ok) {
			console.log("Error: " + JSON.stringify(result))
			throw new Error(JSON.stringify(result.detail) || 'An error occurred');
		}
		if (result)
		{
			const imageUrl = URL.createObjectURL(result);

			const newImage = document.createElement('img');
			newImage.src = imageUrl;
			newImage.alt = 'Generated image';
			newImage.className = 'generated-image';

			loadingElement.replaceWith(newImage);
			console.log("Image loaded successfully");
		}

	} catch (error) {
		console.log(error)
	}

}
