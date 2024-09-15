import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { insertItem } from '../services/item';


const getItem = async (req: Request, res: Response) =>{
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}
const getItems = async (req: Request, res: Response) =>{
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}
const updateItem = async (req: Request, res: Response) =>{
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
}
const postItem = async ({body}: Request, res: Response) =>{
    try {
        const responseItem = await insertItem(body)
        res.send(responseItem)
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM', error)
    }
}
const deleteItem = async (req: Request, res: Response) =>{
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELATE_ITEM')
    }
}



export {getItem, getItems, updateItem, deleteItem, postItem};