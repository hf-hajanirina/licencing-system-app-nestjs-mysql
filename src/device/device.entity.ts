import { User } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Device {
  @PrimaryGeneratedColumn('uuid')
  deviceId: string;

  @Column({ length: 10 })
  deviceName: string;

  @Column()
  deviceOs: string;

  @Column()
  ipAddress: string;

  @Column()
  country: string;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @Column()
  lastConnection: Date;

  @ManyToOne(() => User, (user) => user.devices)
  User: User;
}
