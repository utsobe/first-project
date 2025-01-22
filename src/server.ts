import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    console.log('Connecting to database...');
    await mongoose.connect(config.database_url as string);
    console.log('Database connected');

    app.listen(config.port, () => {
      console.log(`App listening on port ${config.port}!`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
