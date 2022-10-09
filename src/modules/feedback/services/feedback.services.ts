import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Feedback } from '../entities/feedback.entity';
import { CreateFeedbackDto } from '../dto/createFeedback.dto';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>,
  ) {}

  public async findAll() {
    return await this.feedbackRepository.find();
  }

  public async createFeeback(feedbackData: CreateFeedbackDto) {
    const { name, email, message } = feedbackData;
    const newFeedback = this.feedbackRepository.create({
      name,
      email,
      message,
    });
    return await this.feedbackRepository.save(newFeedback);
  }
  public async remove(id: number) {
    await this.feedbackRepository.delete(id);
  }
}
