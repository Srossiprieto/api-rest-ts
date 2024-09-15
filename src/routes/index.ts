import { Router } from "express";
import {readdirSync} from 'fs'

const PATH_ROUTER = `${__dirname}`
const router = Router();

const cleanFileName = (fileName: string)=>{
    const file = fileName.split('.').shift(); // remove .ts 
    return file;

}

readdirSync(PATH_ROUTER).filter((fileName) =>{
    const cleanName = cleanFileName(fileName)
    if(cleanName !== 'index'){
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`loading route /${cleanName}`);
            
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
    });// scan archives in directory. filter and extract names files.
// import router automatic


export {router}