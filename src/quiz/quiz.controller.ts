import { CreateQuizDto } from './dto/createQuizDto';
import { QuizService } from './quiz.service';
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}
  @Get('all')
  getAllQuizzes() {
    return this.quizService.getAllQuizzes();
  }
  @Post('create')
  createQuiz(@Body() createQuizDto: CreateQuizDto) {
    const create = this.quizService.createQuiz(createQuizDto);
    return create;
  }
  @Put('update')
  updateQuiz() {
    return 'Update Quiz';
  }
  @Delete('delete')
  deleteQuiz() {
    return 'Delete Quiz';
  }
}
