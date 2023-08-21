import { Module } from '@nestjs/common';
import { IncomeController } from './income.controller';
import { IncomeService } from './income.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Income } from "./entities/Income";

@Module({
  imports: [TypeOrmModule.forFeature([Income])],
  controllers: [IncomeController],
  providers: [IncomeService]
})
export class IncomeModule {}
