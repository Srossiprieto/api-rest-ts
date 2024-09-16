import ItemModel from "../models/items";
import { Car } from "../interfaces/car.interface";



const getOrders = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};



export {getOrders};
