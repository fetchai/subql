import {makeAddPgTableOrderByPlugin, orderByAscDesc } from "graphile-utils";

export const PgOrderInstantiateContractMessagesByBlockHeight = makeAddPgTableOrderByPlugin(
  "app",
  "instantiate_contract_messages",
  ({ pgSql: sql }) => {
    const sqlIdentifier = sql.identifier(Symbol("block"));
    return orderByAscDesc(
      "INSTANTIATE_CONTRACT_MESSAGES_BY_BLOCK_HEIGHT",
      ({ queryBuilder }) => sql.fragment`(
        select ${sqlIdentifier}.height
        from app.blocks as ${sqlIdentifier}
        where ${sqlIdentifier}.id = ${queryBuilder.getTableAlias()}.block_id
        order by ${sqlIdentifier}.height
      )`
    );
  }
);

