const { json } = require("express");
const path = require('path');

const uploadSinglefile = async (fileObject) =>{
    // create a link path to save file into absolute path
    let uploadPath = path.resolve(__dirname, "../public/images/upload");

    //save name file
    let extName = path.extname(fileObject.name);

    //return the last name path
    let baseName = path.basename(fileObject.name, extName);

    //create a final path
    let finalName = `${baseName}-${Date.now()}${extName}`;
    let finalPath = `${uploadPath}/${finalName}`;
    try {
        await fileObject.mv(finalPath);
        return{
            status: "true",
            path: fileObject.name,
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

const uploadMultifile = async (fileArr) =>{
    try {
        // create a link path to save file into absolute path
        let uploadPath = path.resolve(__dirname, "../public/images/upload");
        // create a value arr
        let resultArr = [];
        let countSuccess = 0;
        for(let i = 0; i < fileArr.length; i++){
            //save name file
            let extName = path.extname(fileArr[i].name);
            //return the last name path
            let baseName = path.basename(fileArr[i].name, extName);
            //create a final path
            let finalName = `${baseName}-${Date.now()}${extName}`;
            let finalPath = `${uploadPath}/${finalName}`;
            try {
                await fileArr[i].mv(finalPath);
                resultArr.push({
                    status: "true",
                    path: 'link-image',
                    fileName: fileArr[i].name,
                    error: null,
                })
                countSuccess++;

            } catch (err) {

                resultArr.push({
                    status: "failed",
                    path: null,
                    fileName: fileArr[i].name,
                    error: JSON.stringify(err)
                })
            }
        }
        return{
            countSuccess: countSuccess,
            detail: resultArr
        }
    } catch (err) {
        console.log("check error >>> ", err);
    }


}

module.exports = {
    uploadSinglefile,
    uploadMultifile
}