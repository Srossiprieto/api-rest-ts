import { Storage } from "../interfaces/storage.interface.js";
import StorageModel from "../models/storage";

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const responseItem = await StorageModel.create({ fileName, idUser, path });
  return responseItem;
};

export { registerUpload };