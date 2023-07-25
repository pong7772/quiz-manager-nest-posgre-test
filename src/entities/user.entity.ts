import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500, nullable: true })
  name: string;
  @Column({ length: 500, nullable: true })
  email: string;
  @Column()
  grade: string;
  @Column()
  gender: string;
  @Column()
  password: string;
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
