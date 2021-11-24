import { Controller, Get } from '@nestjs/common';
import { StatisticsService } from './statistics.service';

@Controller()
export class StatisticsController {
  constructor(private readonly Service: StatisticsService) {}
  @Get('/usageCountStatistics')
  getUsageCountStatistics(): string {
    return this.Service.getUsageCountStatistics();
  }

  @Get('/usageCountStatisticsInfo')
  getUsageCountStatisticsInfo(): string {
    return this.Service.getUsageCountStatisticsInfo();
  }

  @Get('/usageTimeStatistics')
  getUsageTimeStatistics(): string {
    return this.Service.getUsageTimeStatistics();
  }

  @Get('/usageTimeStatisticsInfo')
  getUsageTimeStatisticsInfo(): string {
    return this.Service.getUsageTimeStatisticsInfo();
  }
}