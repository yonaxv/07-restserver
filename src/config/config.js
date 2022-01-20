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
    urlDB = process.env.MONGO_URI;
}
process.env.URL = urlDB