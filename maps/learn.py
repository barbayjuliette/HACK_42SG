import requests
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

api_key = os.getenv("API_KEY")

origin = "Macdonalds Changi City Point"
destination = "SUTD Singapore"


def get_directions(origin, destination, api_key):
    url = f"https://maps.googleapis.com/maps/api/directions/json?origin={origin}&destination={destination}&key={api_key}"
    response = requests.get(url)
    return response.json()


def calculate_distance(origin, destination, api_key):
    url = f"https://maps.googleapis.com/maps/api/distancematrix/json?origins={origin}&destinations={destination}&key={api_key}"
    response = requests.get(url)
    return response.json()


def find_customers_nearby(location, radius, api_key):
    url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={location}&radius={radius}&key={api_key}"
    response = requests.get(url)
    return response.json()


# Call calculate_distance and print the results
distance_result = calculate_distance(origin, destination, api_key)
print(distance_result)  # Display the results



