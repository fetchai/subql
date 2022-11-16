import {makeAddPgTableOrderByPlugin, orderByAscDesc } from "graphile-utils";

export const PgOrderContractsByStoreMessageCodeId = makeAddPgTableOrderByPlugin(
  "app",
  "contracts",
  ({ pgSql: sql }) => {
    const sqlIdentifier = sql.identifier(Symbol("store_contract_message"));
    return orderByAscDesc(
      "CONTRACTS_BY_STORE_MESSAGE_CODE_ID",
      ({ queryBuilder }) => sql.fragment`(
        select ${sqlIdentifier}.code_id
        from app.store_contract_messages as ${sqlIdentifier}
        where ${sqlIdentifier}.id = ${queryBuilder.getTableAlias()}.store_message_id
        order by ${sqlIdentifier}.code_id
      )`
    );
  }
);

