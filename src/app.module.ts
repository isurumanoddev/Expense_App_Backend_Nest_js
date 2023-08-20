import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomeModule } from './income/income.module';
import { Income } from "./income/entities/Income";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'expense',
      entities: [Income],
      synchronize: true,
    }),
    IncomeModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
