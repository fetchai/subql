import {makeAddPgTableOrderByPlugin, orderByAscDesc } from "graphile-utils";

export const PgOrderIBCTransfersByBlockHeight = makeAddPgTableOrderByPlugin(
  "app",
  "ibc_transfers",
  ({ pgSql: sql }) => {
    const sqlIdentifier = sql.identifier(Symbol("block"));
    return orderByAscDesc(
      "IBC_TRANSFERS_BY_BLOCK_HEIGHT",
      ({ queryBuilder }) => sql.fragment`(
        select ${sqlIdentifier}.height
        from app.blocks as ${sqlIdentifier}
        where ${sqlIdentifier}.id = ${queryBuilder.getTableAlias()}.block_id
        order by ${sqlIdentifier}.height
      )`
    );
  }
);

