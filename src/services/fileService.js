const { json } = require("express");

const uploadSinglefile = async (fileObject) =>{
    __dirname = '../public/images';
    uploadPath = __dirname  + fileObject.name;
    console.log("__dirname >>> ", __dirname);
    try {
        await fileObject.mv(uploadPath);
        return{
            status: "true",
            path: 'link-image',
            error: null,
        }
    } catch (err) {
        console.log("check error >>> ", err);
        return{
            status: "failed",
            path: null,
            error: JSON.stringify(err)
        }
    }
}

const uploadMultifile = () =>{

}

module.exports = {
    uploadSinglefile,
    uploadMultifile
}