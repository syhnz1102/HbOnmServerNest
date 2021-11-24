import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as argon2 from "argon2";

@Entity("admin")
export class AdminEntity {
  // @BeforeInsert()
  // async hashPassword() {
  //   this.password = await argon2.hash(this.password);
  // }

  @PrimaryGeneratedColumn()
  adminid: string;

  @Column()
  password: string;

  @Column()
  note: string;

  @Column()
  create_date: Date;

  @Column()
  update_date: Date;

  @Column()
  adminname: string;
}