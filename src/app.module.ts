import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomeModule } from './income/income.module';
import { Income } from "./income/entities/Income";
import { SummaryModule } from './summary/summary.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test2',
      entities: [Income],
      synchronize: true,
    }),
    IncomeModule,
    SummaryModule,
    ReportModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
