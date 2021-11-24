import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";
import * as argon2 from "argon2";

@Entity({name:"tbl_admin_info", schema: "platform"})
export class AdminEntity {
  // @BeforeInsert()
  // async hashPassword() {
  //   this.password = await argon2.hash(this.password);
  // }

  @PrimaryColumn()
  admin_id: string;

  @Column()
  password: string;

  @Column()
  note: string;

  @Column()
  create_date: string;

  @Column()
  update_date: string;

  @Column()
  admin_name: string;
}