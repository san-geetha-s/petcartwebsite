require('dotenv').config()
const mongoClient=require('mongodb').MongoClient

const state={
    db:null
}

module.exports.connect=function(done){
//     const url=`mongodb+srv://sangeetha:<Q1hxvgIoeIKcuW7s>@cluster0.cxlnuak.mongodb.net/?retryWrites=true&w=majority`
//     mongosh "mongodb+srv://cluster0.cxlnuak.mongodb.net/myFirstDatabase" --apiVersion 1 --username sangeetha
//    const url=' mongodb+srv://<credentials>@cluster0.cxlnuak.mongodb.net/myFirstDatabase?appName=mongosh+1.5.0'
    
    const url = 'mongodb://localhost:27017';
    const dbname='shopping'


    mongoClient.connect(url,function(err,data){
        if(err) return done(err)
        state.db=data.db(dbname)
        done()
    })

    
}

module.exports.get=function(){
    return state.db
}
