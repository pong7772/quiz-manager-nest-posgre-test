import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/entities/quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuizDto } from './dto/createQuizDto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {}
  async getAllQuizzes() {
    const quizzes = await this.quizRepository.find();
    return {
      message: 'success',
      quizzes: quizzes,
    };
  }
  async createQuiz(dto: CreateQuizDto) {
    const quiz = this.quizRepository.create(dto);
    console.log(quiz);
    const saveQuiz = await this.quizRepository.save(quiz);
    return saveQuiz;
  }
  updateQuiz() {
    return 'Update Quiz';
  }
  deleteQuiz() {
    return 'Delete Quiz';
  }
}
