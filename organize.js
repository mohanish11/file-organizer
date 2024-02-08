function organizeFn(dirPath){

    let despath;
        // console.log("Organize command implemented for",dirPath);
        // 1-> directory path given 
        if(dirPath==undefined){
            //console.log("kindly enter path");
            despath=process.cwd();
            return ;
        }else {
           let doesexist=fs.existsSync(dirPath);
           if(doesexist){
                  
                  //2->create ->organized files ->directory
                   despath=path.join(dirPath,"organized_files");
                  if(fs.existsSync(despath)==false)fs.mkdirSync(despath);
           }else {
             console.log("enter correct path");
             return;
           }
        }
     organizehelper(dirPath,despath);
       
        //3 identify categerios of all the files present in that directory
    
    
    }
    function organizehelper(scr,des){
        let childnames=fs.readdirSync(scr);
        //console.log(childnames);
        for(let i=0;i<childnames.length;i++){
            let childaddress=path.join(scr,childnames[i]);
            let isfile=fs.lstatSync(childaddress).isFile();
            if(isfile){
                //console.log(childnames[i]);
                let category=getCategory(childnames[i]);
                //console.log(childnames[i],"belongs to",category);
            //4.copy /cut files to that organized dir  inside of any category
            sendfiles(childaddress,des,category);
    
            }
        }
    }
    function sendfiles(scrFilepath,dest,category){
        let categorypath=path.join(dest,category);
        if(fs.existsSync(categorypath)==false){
            fs.mkdirSync(categorypath);
        }
        let filename=path.basename(scrFilepath);
        let destfilepath=path.join(categorypath,filename);
        fs.copyFileSync(scrFilepath,destfilepath);
        fs.unlinkSync(scrFilepath);
        console.log(filename,"copied to",category);
    }
    function getCategory(name){
        let ext=path.extname(name);
        ext=ext.slice(1);
        //console.log(ext);
        for(let type in types){
            let currtypearr=types[type];
            for(let i=0;i<currtypearr.length;i++){
                if(ext==currtypearr[i]){
                    return type;
                }
            }
        }
        return "others";
    }
    module.exports={
        organizeKey:organizeFn
    }