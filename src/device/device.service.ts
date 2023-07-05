import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DATABASE_PROVIDER } from '../app.constant';
import { Repository } from 'typeorm';
import { Device } from './device.entity';
import { User } from 'src/user/user.entity';
import axios from 'axios';

@Injectable()
export class DeviceService {
  constructor(
    @Inject(DATABASE_PROVIDER.DEVICE_REPOSITORY)
    private deviceRepository: Repository<Device>,
  ) {}

  async addDevice(deviceName: string, user: User): Promise<Device> {
    try {
      const getIpAddress = await axios.get(
        'https://api.ipify.org/?format=json',
      );
      const ipAddress = getIpAddress.data.ip;
      const getCountryFromIpAddress = await axios.get(
        `https://ipapi.co/${ipAddress}/country/`,
      );
      const country = getCountryFromIpAddress.data;
      const deviceOs = process.platform;
      const createdDevice = this.deviceRepository.create({
        country,
        deviceName: deviceName,
        deviceOs,
        isActive: false,
        ipAddress,
        lastConnection: new Date(),
        User: user,
      });
      await this.deviceRepository.save(createdDevice);
      return createdDevice;
    } catch (error) {
      throw new Error(`createDevice error => ${error}`);
    }
  }

  async getDeviceById(deviceId: string): Promise<Device> {
    try {
      const foundDevice = await this.deviceRepository.findOneBy({
        deviceId,
      });
      if (!foundDevice) {
        throw new NotFoundException(`Device with ID [${deviceId}] not found`);
      }
      return foundDevice;
    } catch (error) {
      throw new Error(`getDevice error => ${error}`);
    }
  }

  async removeDevice(deviceId: string): Promise<void> {
    try {
      const foundDevice = await this.getDeviceById(deviceId);
      const { deviceId: foundDeviceId } = foundDevice;
      const deletedTask = this.deviceRepository.delete(foundDeviceId);
      console.log(deletedTask);
    } catch (error) {
      throw new Error(`removeDevice error => ${error}`);
    }
  }

  async updateDevice(deviceId: string, deviceName: string): Promise<Device> {
    const foundDevice = await this.getDeviceById(deviceId);
    foundDevice.deviceName = deviceName;
    await this.deviceRepository.save(foundDevice);
    return foundDevice;
  }
}
