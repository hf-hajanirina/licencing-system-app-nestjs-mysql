import { Device } from 'src/device/device.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { licenseMaxDevice, licensePlans, licenseStatus } from './license.model';

@Entity()
export class License {
  @PrimaryGeneratedColumn('uuid')
  licenseId: string;

  @Column()
  licensePlan: licensePlans;

  @Column()
  licenseKey: string;

  @Column({
    type: 'json',
    transformer: {
      to: (value) => JSON.stringify(value),
      from: (value) => JSON.parse(value),
    },
  })
  devices: Device[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @Column({ type: 'date' })
  expireDate: Date;

  @Column({ type: 'date' })
  firstActivation: Date;

  @Column()
  licenceStatus: licenseStatus;

  @Column()
  maxDevices: licenseMaxDevice;
}
