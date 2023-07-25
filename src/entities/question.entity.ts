import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Quiz } from './quiz.entity';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 240 })
  title: string;
  @Column({ length: 300 })
  description?: string;
  @Column({ default: true })
  isActive: boolean;
  @ManyToOne((type) => Quiz, (quiz) => quiz.question)
  quiz: Quiz;
}
