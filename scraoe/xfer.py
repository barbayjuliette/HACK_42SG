import os
from PIL import Image

# Function to convert webp images to png
def convert_webp_to_png():
    # Get the list of all files in the current directory
    files = os.listdir('.')
    
    # Loop through all the files
    for file in files:
        # Check if the file is a webp image
        if file.endswith('.webp'):
            # Open the webp image
            with Image.open(file) as img:
                # Convert the image to png
                img.save(file.replace('.webp', '.png'), 'png')
                print(f"Converted {file} to {file.replace('.webp', '.png')}")

# Call the function
convert_webp_to_png()
