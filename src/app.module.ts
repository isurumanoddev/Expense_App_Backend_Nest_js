import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { ReportModule } from "./report/report.module";
import { Report } from "./report/entity/Report";



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test2',
      entities: [Report],
      synchronize: true,
    }),
   ReportModule

    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
