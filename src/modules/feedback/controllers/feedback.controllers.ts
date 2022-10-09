import {
  Controller,
  Get,
  Res,
  Req,
  Post,
  RequestMapping,
  Delete,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { Recoverable } from 'repl';

import { FeedbackService } from '../services/feedback.services';
import { CreateFeedbackDto } from '../dto/createFeedback.dto';

@Controller('/api/feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get()
  async getAllFeedback(_, @Res() res: Response) {
    const allFeedback = await this.feedbackService.findAll();
    return res.json({ allFeedback });
  }

  @Post()
  async createFeedback(@Body() body: CreateFeedbackDto, @Res() res: Response) {
    const addedFeedback = await this.feedbackService.createFeeback(body);
    return res.json(addedFeedback);
  }

  @Delete('/:id')
  async deleteFeedback(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    await this.feedbackService.remove(id);
    return res.json({ message: `Feedback with id: ${id} - was deleted` });
  }
}
