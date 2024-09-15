import ItemModel from "../models/items";

const insertItem = async <Car>(item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
} 

export { insertItem }; 