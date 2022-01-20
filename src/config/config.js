//=============================
//      PUERTO
//=============================
process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//process.env.URL = 'mongodb://localhost:27017/cafe';
let urlDB;
if(process.env.NODE_ENV === 'env'){
    urlDB='mongodb://localhost:27017/cafe'
}else{
    urlDB = 'mongodb+srv://ionaxv:260697Yoo@cluster0.lq2hk.mongodb.net/cafe'
}
process.env.URL = urlDB