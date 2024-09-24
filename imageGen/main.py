from diffusers import DiffusionPipeline
from PIL import Image  # {{ edit_1 }}

pipe = DiffusionPipeline.from_pretrained("black-forest-labs/FLUX.1-dev")

prompt = "Panda eating italian cuisine"
image = pipe(prompt).images[0]

image.show()  # {{ edit_2 }}