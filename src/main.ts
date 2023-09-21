import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseService } from './services/database.service';
import config from 'config';

async function bootstrap() {

  const imagemaker_api_port = config.imagemaker_api_port;

  console.log(`✡ Starting Application - Image Maker Api ✡`);
  console.log(`✡ PORT HTTP = ${imagemaker_api_port} ✡`);

  process.on('uncaughtException', error);
  process.on('unhandledRejection', error);
  process.on('SIGTERM', error);


  // 1. Create Api Server
  const app = await startApiServer(imagemaker_api_port)

  // 2. Connect Mysql Database
  await setMysqlDb(app)
}


async function setMysqlDb(app) {
  const databaseService = app.get(DatabaseService);
  await databaseService.checkConnection(); // Test the database connection
  return databaseService.initializeModels(); // Initialize models
}

async function startApiServer(port) {
  // Start the api server.
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);

    return app;
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}


async function error(error) {
  let message = ``;
  switch (error.errno) {
    case 'EADDRINUSE': message = `EADDRINUSE: PORT in use`; break;
    default: message = error.message;
  }

  console.error(``);
  console.error('Unexpected error detected is caught by bin level.');
  console.error('Message  : ', message);
  console.error('Stack    : ', error);
  console.error(``);

  process.exit(0);
}

bootstrap().catch(error);

