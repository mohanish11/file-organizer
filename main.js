#!/usr/bin/env node
let inputarr=process.argv.slice(2);
const { dir } = require("console");
let fs=require("fs");
let path=require("path");
let helpObj=require("./commands/help");
let treeObj=require("./commands/tree");
let organizeObj=require("./commands/organize");
let command=inputarr[0];
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    img:["jpg","png"]
}
switch(command){
    case "tree": {
        treeObj.treeKey(inputarr[1])
        break;
       }
    case "organize":{
        organizeObj.organizeKey(inputarr[1]);
        break;
    }
    case "help" :{
      helpObj.helpKEY();
      break;
    }
       
    default:{
        console.log("please Input Right Command");
        break;
    }
}

