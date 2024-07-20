import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShapesModule } from './shapes/shapes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ShapesLayoutModule } from './shapes_layout/shapes_layout.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    ShapesModule,
    ShapesLayoutModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'appuser',
      password: 'apppass',
      database: 'restaurant_layout_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}