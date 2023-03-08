const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/registerationForm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch((e)=>{
    console.log('no connection')
})