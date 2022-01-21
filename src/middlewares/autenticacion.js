const jwt = require('jsonwebtoken');
//=============================
//Verificar Token
//=============================


let verificaToken =(req,res,next)=>{
    
    let token = req.get('token');
    //console.log(token);
    jwt.verify(token,process.env.SEED,(err,decoded)=>{
        if(err){
            return res.status(401).json({
                ok:false,
                err: 'token no valido'
            })
        }
        req.usuario =decoded.usuario;
        next();
    })

};

//=============================
//Verificar Token ADMIN ROL
//=============================

let verificaAdmin_Role = (req,res,next)=>{
    //el req.usuario se obtiene del middleware verificaToken
    let usuario = req.usuario

    if(usuario.role === "ADMIN_ROLE"){
        next();
    }else{
        return res.status(401).json({
            ok:false,
            err: 'Usuario no autorizado'
        })
    }
};


module.exports={
    verificaToken,
    verificaAdmin_Role
}