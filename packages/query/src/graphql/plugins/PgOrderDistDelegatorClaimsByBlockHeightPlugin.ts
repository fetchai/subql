import {makeAddPgTableOrderByPlugin, orderByAscDesc } from "graphile-utils";

export const PgOrderDistDelegatorClaimsByBlockHeight = makeAddPgTableOrderByPlugin(
  "app",
  "dist_delegator_claims",
  ({ pgSql: sql }) => {
    const sqlIdentifier = sql.identifier(Symbol("block"));
    return orderByAscDesc(
      "DIST_DELEGATOR_CLAIMS_BY_BLOCK_HEIGHT",
      ({ queryBuilder }) => sql.fragment`(
        select ${sqlIdentifier}.height
        from app.blocks as ${sqlIdentifier}
        where ${sqlIdentifier}.id = ${queryBuilder.getTableAlias()}.block_id
        order by ${sqlIdentifier}.height
      )`
    );
  }
);

