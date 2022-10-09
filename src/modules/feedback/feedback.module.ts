import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Feedback } from './entities/feedback.entity';
import { FeedbackController } from './controllers/feedback.controllers';
import { FeedbackService } from './services/feedback.services';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback])],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
