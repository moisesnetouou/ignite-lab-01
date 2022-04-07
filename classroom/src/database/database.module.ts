import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Esse modulo exporta prisma para toda aplicação.
})
export class DatabaseModule {}
