import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';


const getItem = async (req: Request, res: Response) =>{
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOG')
    }
}
const getItems = async (req: Request, res: Response) =>{
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOGS')
    }
}
const updateItem = async (req: Request, res: Response) =>{
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_BLOG')
    }
}
const postItem = async ({body}: Request, res: Response) =>{
    try {
        res.send(body)
    } catch (error) {
        handleHttp(res, 'ERROR_POST_BLOG')
    }
}
const deleteItem = async (req: Request, res: Response) =>{
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELATE_BLOG')
    }
}



export {getItem, getItems, updateItem, deleteItem, postItem};