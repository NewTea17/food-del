import foodModel from "../models/foodModel.js";
import fs from 'fs';

const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const foodInfo = req.body;

    const food = new foodModel({
        name: foodInfo.name,
        description: foodInfo.description,
        price: foodInfo.price,
        category: foodInfo.category,
        image: image_filename
    })

    try {
        await food.save();
        res.json({ success: true, message: "Food added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// remove food item
const removeFood = async (req, res) => {
    try {
        const foodId = req.body.id;
        const food = await foodModel.findById(foodId);
        fs.unlink(`uploads/${food.image}`, () => { });

        await foodModel.findByIdAndDelete(foodId);
        res.json({ success: true, message: "Food removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { addFood, listFood, removeFood }
