import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Chapter } from 'src/entities/Chapter';
import { Page } from 'src/entities/Page';
import { Story } from 'src/entities/Story';
import { Tag } from 'src/entities/Tag';
import { LongstripService } from '../longstrip/longstrip.service';
import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';

@Module({
  imports: [MikroOrmModule.forFeature([Page, Chapter, Story, Tag])],
  controllers: [PagesController],
  providers: [PagesService, LongstripService],
})
export class PagesModule {}
