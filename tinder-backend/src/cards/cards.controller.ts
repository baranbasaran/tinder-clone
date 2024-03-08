// cards.controller.ts
import { Controller, Get, Param, Post, Body, HttpStatus, HttpException, Delete } from '@nestjs/common';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  async createCard(@Body() cardData: { name: string; imgUrl: string }) {
    try {
      const createdCard = await this.cardsService.createCard(cardData);
      return { message: 'Card created successfully', card: createdCard };
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async getAllCards() {
    return this.cardsService.findAllCards();
  }

  @Get(':id')
  async getCardById(@Param('id') id: string) {
    return this.cardsService.findCardById(id);
  }
  @Delete()
  async deleteAllCards(){
    return this.cardsService.deleteAllCards();
  }
}
