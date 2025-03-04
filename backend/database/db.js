const mongoose = require("mongoose");

const uri = "mongodb+srv://berkayozkilic:Deneme1.@cluster0.iczzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connection = () =>{
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log("MongoDb bağlantısı başarılı!"))
    .catch((err)=> console.log ("Bağlantı Hatası! Hata: " + err.message));
}

module.exports = connection;