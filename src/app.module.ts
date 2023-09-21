// app.module.ts
import { Module } from '@nestjs/common';
import { IndexRouteModule } from './api/routes/index.route'; // Import the IndexRouteModule
import { SharedModule } from './shared.module';

@Module({
  imports: [IndexRouteModule, SharedModule], // Include the IndexRouteModule
  controllers: [],
  providers: [],
})
export class AppModule { }
