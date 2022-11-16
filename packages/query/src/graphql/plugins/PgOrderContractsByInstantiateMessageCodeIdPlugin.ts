import {makeAddPgTableOrderByPlugin, orderByAscDesc } from "graphile-utils";

export const PgOrderContractsByInstantiateMessageCodeId = makeAddPgTableOrderByPlugin(
  "app",
  "contracts",
  ({ pgSql: sql }) => {
    const sqlIdentifier = sql.identifier(Symbol("instantiate_contract_message"));
    return orderByAscDesc(
      "CONTRACTS_BY_INSTANTIATE_MESSAGE_CODE_ID",
      ({ queryBuilder }) => sql.fragment`(
        select ${sqlIdentifier}.code_id
        from app.instantiate_contract_messages as ${sqlIdentifier}
        where ${sqlIdentifier}.id = ${queryBuilder.getTableAlias()}.instantiate_message_id
        order by ${sqlIdentifier}.code_id
      )`
    );
  }
);

