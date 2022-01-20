//=============================
//      PUERTO
//=============================
process.env.PORT = process.env.PORT || 3000;



//=============================
//      ENTORNO
//=============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//process.env.URL = 'mongodb://localhost:27017/cafe';
let urlDB;
if(process.env.NODE_ENV === 'dev'){
    urlDB='mongodb://localhost:27017/cafe'
}else{
    urlDB = process.env.MONGO_URI;
}
process.env.URL = urlDB


//=============================
//      VENCIMIENTO DEL TOKEN
//=============================

//60 segundos
//60 min
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60*60*24*30;




//=============================
//      SEED DE AUTH
//=============================

process.env.SEED = process.env.SEED ||'este_es_el_seed_desarrollo';