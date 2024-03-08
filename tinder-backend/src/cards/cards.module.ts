// cards.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { cardSchema as Card } from './schemas/card.schema';
import { DatabaseModule } from '../database/database.module'; // Adjust the path accordingly

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Card', schema: Card }]),
    DatabaseModule,
  ],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
