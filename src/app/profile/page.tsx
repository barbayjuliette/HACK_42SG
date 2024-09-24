"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function AvatarPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // New state for loading status
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null); // New state for generated image URL

  const handleImageClick = (imageValue: string) => {
    setSelectedImage(imageValue);
    setErrorMessage(null); // Clear error message when an image is selected
  };

  async function query(cuisine: string) {
    const adjectives = ["fun", "cute", "adventurous", "master", "adorable", "strong", "beautiful", "happy", "smiling", "hungry", "relaxed"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

    const animal = "panda";
    const prompt = `Rounded avatar of a ${adjective} ${animal} with a theme of ${cuisine}`;
    const data = { "inputs": prompt };
    console.log("Prompt: " + prompt);

	console.log("API Keyyyy: " + process.env.NEXT_PUBLIC_API_KEY)

    try {
      setLoading(true); // Set loading state to true
      const response = await fetch(
        "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.blob();
      if (!response.ok) {
        console.log("Error: " + JSON.stringify(result));
        throw new Error(JSON.stringify(result) || 'An error occurred');
      }
      if (result) {
        const imageUrl = URL.createObjectURL(result);
        setGeneratedImageUrl(imageUrl); // Set the generated image URL
        console.log("Image loaded successfully");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading state to false
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedImage) {
      setErrorMessage("Please select an image before submitting.");
      return;
    }
    query(selectedImage);
    console.log("Selected Image:", selectedImage);
  };

  return (
    <div className="flex flex-col w-full py-2 pb-0 gap-12 bg-panda_bg items-center">
      <div className="flex items-center justify-between w-full p-4 bg-pink-500 text-white" style={{ margin: 0 }}>
        <p className="text-white cursor-pointer" onClick={() => window.history.back()} style={{ fontFamily: 'inherit' }}>
          X
        </p>
        <p className="text-lg font-bold" style={{ fontFamily: 'inherit' }}>Customize your avatar</p>
        <Button className="text-white hover:text-gray-200 border border-white rounded-full bg-pink-500">
          ?
        </Button>
      </div>

      <Image
        height={300}
        width={300}
        alt="Profile Picture"
        src={generatedImageUrl || "/master-panda.jpeg"} // Use generated image URL or default image
        className="rounded-full"
      />
      <p className="text-lg font-bold mb-0">Avatar customization</p> {/* Adjust margin-bottom */}
      <div className="grid grid-cols-4 gap-2 bg-white px-4 py-4 rounded-lg">
        <button type="button" onClick={() => handleImageClick("italian")}>
          <div className="flex flex-col items-center">
            <Image
              src="/pizza2.jpg"
              height={60}
              width={60}
              alt="pizza"
              className={`border rounded-lg ${selectedImage === "italian" ? "border-pink-500" : ""}`}
            />
            <p className="text-sm mt-1">Italian</p>
          </div>
        </button>
        <button type="button" onClick={() => handleImageClick("sushis")}>
          <div className="flex flex-col items-center">
            <Image
              src="/sushis.jpeg"
              height={60}
              width={60}
              alt="sushis"
              className={`border rounded-lg ${selectedImage === "sushis" ? "border-pink-500" : ""}`}
            />
            <p className="text-sm mt-1">Japanese</p>
          </div>
        </button>
        <button type="button" onClick={() => handleImageClick("tacos")}>
          <div className="flex flex-col items-center">
            <Image
              src="/tacos.jpg"
              height={60}
              width={60}
              alt="tacos"
              className={`border rounded-lg ${selectedImage === "tacos" ? "border-pink-500" : ""}`}
            />
            <p className="text-sm mt-1">Mexican</p>
          </div>
        </button>
        <button type="button" onClick={() => handleImageClick("indian")}>
          <div className="flex flex-col items-center">
            <Image
              src="/indian.jpg"
              height={60}
              width={60}
              alt="indian food"
              className={`border rounded-lg ${selectedImage === "indian" ? "border-pink-500" : ""}`}
            />
            <p className="text-sm mt-1">Indian</p>
          </div>
        </button>
      </div>
	  <div>
		<form onSubmit={handleSubmit} className="w-full flex justify-center">
			<input type="hidden" name="selectedImage" value={selectedImage || ''} />
			{loading ? (
				<p>Generating image...</p>
			) : (
				<Button type="submit" className="px-3 py-1 bg-panda text-white rounded-md font-bold w-fit hover:bg-panda_light mb-2">
					Generate a new avatar
				</Button>
			)}
		</form>
		{errorMessage && <p className="text-red-500">{errorMessage}</p>}
	  </div>
    </div>
  );
}
