// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Module } from '@nestjs/common';
import {
  makeGaugeProvider,
  PrometheusModule,
} from '@willsoto/nestjs-prometheus';
import { FetchModule } from '../indexer/fetch.module';
import { MetricEventListener } from './event.listener';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { MetaController } from './meta.controller';
import { MetaService } from './meta.service';
import { MmrQueryController } from './mmrQuery.controller';
import { ReadyController } from './ready.controller';
import { ReadyService } from './ready.service';

@Module({
  imports: [PrometheusModule.register(), FetchModule],
  controllers: [
    MetaController,
    HealthController,
    ReadyController,
    MmrQueryController,
  ],
  providers: [
    MetricEventListener,
    makeGaugeProvider({
      name: 'subql_indexer_api_connected',
      help: 'The indexer api connection status',
    }),
    makeGaugeProvider({
      name: 'subql_indexer_processing_block_height',
      help: 'The current processing block height',
    }),
    makeGaugeProvider({
      name: 'subql_indexer_target_block_height',
      help: 'The latest finalized block height',
    }),
    makeGaugeProvider({
      name: 'subql_indexer_best_block_height',
      help: 'The latest best block height',
    }),
    makeGaugeProvider({
      name: 'subql_indexer_block_queue_size',
      help: 'The size of fetched block queue',
    }),
    makeGaugeProvider({
      name: 'subql_indexer_blocknumber_queue_size',
      help: 'The size of fetched block number queue',
    }),
    makeGaugeProvider({
      name: 'subql_indexer_using_dictionary',
      help: 'The status of indexer is using the dictionary',
    }),
    makeGaugeProvider({
      name: 'subql_indexer_skip_dictionary_count',
      help: 'The number of times indexer been skip use dictionary',
    }),
    makeGaugeProvider({
      name: 'subql_indexer_processed_block_count',
      help: 'The number of processed block',
    }),
    MetaService,
    HealthService,
    ReadyService,
  ],
})
export class MetaModule {}
