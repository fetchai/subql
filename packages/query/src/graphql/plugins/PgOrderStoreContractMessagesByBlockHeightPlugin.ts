import {makeAddPgTableOrderByPlugin, orderByAscDesc } from "graphile-utils";

export const PgOrderStoreContractMessagesByBlockHeight = makeAddPgTableOrderByPlugin(
  "app",
  "store_contract_messages",
  ({ pgSql: sql }) => {
    const sqlIdentifier = sql.identifier(Symbol("block"));
    return orderByAscDesc(
      "STORE_CONTRACT_MESSAGES_BY_BLOCK_HEIGHT",
      ({ queryBuilder }) => sql.fragment`(
        select ${sqlIdentifier}.height
        from app.blocks as ${sqlIdentifier}
        where ${sqlIdentifier}.id = ${queryBuilder.getTableAlias()}.block_id
        order by ${sqlIdentifier}.height
      )`
    );
  }
);

