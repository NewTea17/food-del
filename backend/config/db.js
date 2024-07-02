import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://new:63oZJ3azVaiUUdXD@cluster0.yygbpfe.mongodb.net/food-del')
    .then(() => console.log("DB connected!"))
}