// routes/index.route.ts
import { Module } from '@nestjs/common';
import { NotFoundFilter } from '../filters/not-found.filter';
import { APP_FILTER } from '@nestjs/core';
import { UserController } from '../controllers/user.controller';
import { IndexController } from '../controllers/index.controller';
import { GlobalHttpExceptionFilter } from '../filters/global-http-exceptions.filter';
@Module({
    imports: [], // Include the UserRouteModule
    controllers: [UserController, IndexController],
    providers: [
        {
            provide: APP_FILTER,
            useClass: NotFoundFilter,
        },
        {
            provide: APP_FILTER,
            useClass: GlobalHttpExceptionFilter,
        },
    ],
})
export class IndexRouteModule { }
