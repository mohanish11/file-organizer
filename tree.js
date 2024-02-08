function treeFn(dirPath){
    //console.log("Tree command implemented for ", dirPath);
    let despath;
      // console.log("Organize command implemented for",dirPath);
      // 1-> directory path given 
      if(dirPath==undefined){
         // process.cwd();
          treehelper(process.cwd(),"");
          return ;
      }else {
         let doesexist=fs.existsSync(dirPath);
         if(doesexist){
              treehelper(dirPath,"");
         }else {
           console.log("enter correct path");
           return;
         }
      }
  }
  
  
  function treehelper(dirPath,intent){
      //is file or folder
      let isfile=fs.lstatSync(dirPath).isFile();
      if(isfile){
          let filename=path.basename(dirPath);
          console.log(intent+"├───"+filename );
      }else{
          let dirName=path.basename(dirPath)
          console.log(intent+"└───"+dirName);
          let childrens= fs.readdirSync(dirPath);
          for(let i=0;i<childrens.length;i++){
              let childrenpath=path.join(dirPath,childrens[i]);
              treehelper(childrenpath,intent+"\t");
          }
      }
  
  }
  module.exports={
    treeKey :treeFn
  }