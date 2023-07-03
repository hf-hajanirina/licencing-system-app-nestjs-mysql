import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DeviceService } from './device.service';
import { Device } from './device.entity';
import { User } from 'src/user/user.entity';

@Controller('device')
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Post()
  addDevice(
    @Body('deviceName') deviceName: string,
    @Body('User') user: User,
  ): Promise<Device> {
    return this.deviceService.addDevice(deviceName, user);
  }

  @Delete('/:id')
  removeDevice(@Param('id') id: string): Promise<void> {
    return this.deviceService.removeDevice(id);
  }

  @Patch('/:id')
  updateTaskStatusById(
    @Param('id') id: string,
    @Body('deviceName') deviceName: string,
  ): Promise<Device> {
    return this.deviceService.updateDevice(id, deviceName);
  }
}
