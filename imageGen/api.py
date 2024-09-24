import requests
import io
from PIL import Image

API_URL = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev"
headers = {"Authorization": "Bearer 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"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.content

# Generate the image
image_bytes = query({
	"inputs": "Astronaut riding a cat",
})

# Save the image to a file
with open("generated_image.png", "wb") as file:
	file.write(image_bytes)

# Optionally, you can still load the image with PIL if needed
image = Image.open(io.BytesIO(image_bytes))