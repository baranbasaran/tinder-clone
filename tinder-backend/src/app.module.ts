// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make ConfigModule global for application-wide access
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI), // Use the environment variable
    CardsModule,
  ],
})
export class AppModule {}
