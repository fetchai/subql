// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Module } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SubqueryProject } from '../configure/SubqueryProject';
import { DbModule } from '../db/db.module';
import { ApiService } from './api.service';
import { DictionaryService } from './dictionary.service';
import { DsProcessorService } from './ds-processor.service';
import { DynamicDsService } from './dynamic-ds.service';
import { IndexerManager } from './indexer.manager';
import { MmrService } from './mmr.service';
import { PoiService } from './poi.service';
import { ProjectService } from './project.service';
import { SandboxService } from './sandbox.service';
import { StoreService } from './store.service';
import { WorkerService } from './worker/worker.service';

@Module({
  imports: [DbModule.forFeature(['Subquery'])],
  providers: [
    IndexerManager,
    StoreService,
    {
      provide: ApiService,
      useFactory: async (
        project: SubqueryProject,
        eventEmitter: EventEmitter2,
      ) => {
        const apiService = new ApiService(project, eventEmitter);
        await apiService.init();
        return apiService;
      },
      inject: [SubqueryProject, EventEmitter2],
    },
    DictionaryService,
    SandboxService,
    DsProcessorService,
    DynamicDsService,
    PoiService,
    MmrService,
    ProjectService,
    WorkerService,
  ],
  exports: [StoreService, MmrService],
})
export class IndexerModule {}
