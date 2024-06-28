import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://elted6501:HiOrtiz6501@aikurapet.8gswtlo.mongodb.net/?retryWrites=true&w=majority&appName=AiKuraPet', {
  dbName: 'paqueton'
})
  .then(db => console.log('Mongodb Connected'))
  .catch(err => console.error(err));

