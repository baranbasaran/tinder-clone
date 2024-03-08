// cards.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './interfaces/card.interface';

@Injectable()
export class CardsService {
  constructor(@InjectModel('Card') private readonly cardModel: Model<Card>) {}

  async createCard(cardData: { name: string; imgUrl: string }): Promise<Card> {
    const createdCard = new this.cardModel(cardData);
    return await createdCard.save();
  }
  
  async findAllCards(): Promise<Card[]> {
    return await this.cardModel.find().exec();
  }

  async findCardById(id: string): Promise<Card> {
    const card = await this.cardModel.findById(id).exec();
    if (!card) {
      throw new NotFoundException(`Card with ID '${id}' not found.`);
    }
    return card;
  }
  async deleteAllCards(): Promise<{ deletedCount: number }> {
    const result = await this.cardModel.deleteMany({});
    return { deletedCount: result.deletedCount };
  }
}
