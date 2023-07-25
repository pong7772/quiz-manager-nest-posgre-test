import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './question.entity';

@Entity('quiz')
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 200 })
  name: string;
  @Column({ length: 200 })
  description?: string;
  @Column({ default: true })
  isActive: boolean;
  @OneToMany((type) => Question, (question) => question)
  question: Question[];
}
