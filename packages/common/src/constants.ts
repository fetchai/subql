// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

//IPFS
export const IPFS_DEV = 'https://interipfs.thechaindata.com';
export const IPFS_PROD = 'https://ipfs.subquery.network';
export const IPFS_NODE_ENDPOINT = `${IPFS_PROD}/ipfs/api/v0`;
export const IPFS_CLUSTER_ENDPOINT = `${IPFS_PROD}/cluster/add`;
export const IPFS_REGEX = /^ipfs:\/\//i;

// MANIFEST
export const RUNNER_REGEX = /(\^?)(\d|x|\*)+\.(\d|x|\*)+\.(\d|x|\*)+/;

//MMR
export const DEFAULT_WORD_SIZE = 32;
export const DEFAULT_LEAF = Buffer.from('0000000000000000000000000000000000000000000000000000000000000001', 'hex');
export const MMR_AWAIT_TIME = 2;

// NETWORK
export enum NETWORK_FAMILY {
  substrate = 'Substrate',
  avalanche = 'Avalanche',
  terra = 'Terra',
  cosmos = 'Cosmos',
  algorand = 'Algorand',
}

export const runnerMapping = {
  '@subql/node': NETWORK_FAMILY.substrate,
  '@subql/node-substrate': NETWORK_FAMILY.substrate,
  '@subql/node-avalanche': NETWORK_FAMILY.avalanche,
  '@subql/node-terra': NETWORK_FAMILY.terra,
  '@subql/node-cosmos': NETWORK_FAMILY.cosmos,
  '@subql/node-algorand': NETWORK_FAMILY.algorand,
};
