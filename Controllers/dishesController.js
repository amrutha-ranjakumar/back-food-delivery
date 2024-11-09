const dishesmenus = require("../models/dishesmenuSchema");

// Add project
exports.adddishesmenu = async (req, res) => {
    console.log("Inside dishesmenuController");

    const userId = req.payload;
    console.log(userId);

    // Extract menu and dishes images separately
    const menuimage = req.files.menuimage ? req.files.menuimage[0].filename : null;
    console.log("Menu Image:", menuimage);
    
    const dishesImage = req.files.dishesImage ? req.files.dishesImage[0].filename : null;
    console.log("Dishes Image:", dishesImage);

    const { menu, dishname, description, price } = req.body;

    try {
        const existingDishMenu = await dishesmenus.findOne({ dishname: dishname });
        if (existingDishMenu) {
            res.status(406).json('Dish menu already exists, upload a new one');
        } else {
            const newDishMenu = new dishesmenus({
                menuimage: menuimage,
                menu: menu,
                dishname: dishname,
                description: description,
                price: price,
                dishesImage: dishesImage,
                userId: userId
            });
            await newDishMenu.save();
            res.status(200).json("Dish menu added successfully");
        }
    } catch (err) {
        res.status(401).json("Unable to add dish menu due to: " + err);
    }
};

// Get all dishes
exports.getAlldishes = async (req, res) => {
    try {
        const allDishes = await dishesmenus.find();
        res.status(200).json(allDishes);
    } catch (err) {
        res.status(401).json("Request failed due to: " + err);
    }
}
