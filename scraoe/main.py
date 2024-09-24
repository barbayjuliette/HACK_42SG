info = {
    "name": "Coriander Leaf - Chijmes",
    "cuisine" : "Western",
    "menu items" : [
        {"name" : "Muhamarra & Labneh - Veg" , "image": "me1.png", "price": 20.00, "description" : "Duo of classic Mediterranean dips comes with soft naan."},
        {"name" : "Watermelon Salad, Mint, Pomegranate - Veg/Gluten free", "image" : "water1.png", "price" : 18.00, "description" : "Turkish White Cheese"},
        {"name" : "Green Mango Salad - Veg/Gluten free", "image" : "greenman.png", "price" : 17.00, "description" : "Mustard Kasundi Dressing, Green Chilli"},
        {"name" : "Chilled Soba Noodles Furikake - Vegan", "image" : "coriander.png", "price" : 18.00, "description" : "Pickled Cucumber, Wakame"},
        {"name" : "Spinach Parcel- Veg", "image": "spinach.png", "price" : 19.00, "description" : "Spinach with toasted pine nuts, Turkish white cheese and browned butter"},
        {"name" : "Grilled Halloumi - Veg", "image": "halloumi.png", "price" : 22.00, "description" : "Served with roasted vegetables and a balsamic glaze."},
        {"name" : "Falafel Wrap - Vegan", "image": "falafel.png", "price" : 15.00, "description" : "Falafel balls wrapped in a soft tortilla with hummus and fresh veggies."},
        {"name" : "Lamb Kofta", "image": "kofta.png", "price" : 25.00, "description" : "Spiced lamb meatballs served with a tangy yogurt sauce."},
        {"name" : "Chicken Shawarma", "image": "shawarma.png", "price" : 23.00, "description" : "Marinated chicken served with garlic sauce and pickled vegetables."},
        {"name" : "Baklava - Veg", "image": "baklava.png", "price" : 10.00, "description" : "Layers of filo pastry filled with chopped nuts and sweetened with honey."},
    ]
}

import json

with open('info.json', 'w') as json_file:
    json.dump(info, json_file, indent=4)
