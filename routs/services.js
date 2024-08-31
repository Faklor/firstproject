const {Router} = require('express')
const fs =require('fs')
const multer = require('multer')
const path = require('path')

//----------data----------------
const data = require('../data/services.json')


const router = Router()


router.get('/', async(req, res)=>{
    try{
      
       
        res.json(data)
       

    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})

const fileFilter = (req, file, cb)=>{
    const typeFile = ['image/jpeg','image/jpg','image/png']
    if(!typeFile.includes(file.mimetype)){
        const error = new Error('Error file')
        error.code = "INCORRECT_FILETYPE"
        return cb(error, false)
    } 
    cb(null, true)
} 
//single titleImg
const storage = multer.diskStorage({
    destination:(req, res,cb)=>{
        cb(null, '../firstproject/src/res/services')
    },
    filename: function(req, file, cb){
        
      //cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname) + '.' + 'jpg');
        cb(null, file.fieldname + path.extname(file.originalname))
    } 
});
const upload = multer({
    storage: storage,
    fileFilter,
    limits:{
        fileSize:5000000
    },
})

router.post('/updateTitle', upload.single('imgTitle'),async(req, res)=>{
    try{

        const {nameTitle, sellTitle, nameImage, servicesName} = req.body
       
        const dataItem = data.find(item=>item.name === servicesName)
  
        dataItem.name = nameTitle
        dataItem.sell = sellTitle

        
        data.splice(dataItem.id-1,1,dataItem)
        

        fs.writeFileSync(path.join(__dirname,'../data/services.json'),JSON.stringify(data))

        if(req.file){
            
            fs.renameSync(req.file.path, req.file.path.replace(req.file.fieldname + path.extname(req.file.originalname), nameImage))

           
        }
        

        res.json(nameTitle)

    }
    catch(e){
        res.status(500).json({error:e.message}) 
    }
})

//array titleImg
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const storageArray = multer.diskStorage({
    destination:(req, res,cb)=>{
        cb(null, '../firstproject/src/res/services/ContentServices')
    },
    filename: function(req, file, cb){
        
      //cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname) + '.' + 'jpg');
        cb(null, file.fieldname + path.extname(file.originalname))
    } 
});
const uploadArray = multer({
    storage: storageArray,
    fileFilter
})

router.post('/updateContent',uploadArray.any(),async (req,res)=>{
    try{
        //console.log()
        const {servicesName, arrayContent} = req.body
       
        
        const dataItem = data.find(item=>item.name === servicesName)
        
        // // data.splice(dataItem.id-1,1,dataItem)
        
        let array = JSON.parse(arrayContent)
        array.forEach((item,index) => {
            if(item.web.type === 'img'){
                
                item.web.props.src = dataItem.id+'-'+index+'.jpg'
                
            } 
        })
        dataItem.content = array
        data.splice(dataItem.id-1,1,dataItem)
        //res.json(contentImgs)
        fs.writeFileSync(path.join(__dirname,'../data/services.json'),JSON.stringify(data))
    }
    catch(e){
        res.status(500).json({error:e.message})
    }
})

module.exports = router


