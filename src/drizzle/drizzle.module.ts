import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export const PG_CONNECTION = 'PG_CONNECTION';
import { db } from './db';

@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      inject: [ConfigService],
      useFactory: async () => {
        return db;
      },
    },
  ],
  exports: [PG_CONNECTION],
})
export class DrizzleModule {}
