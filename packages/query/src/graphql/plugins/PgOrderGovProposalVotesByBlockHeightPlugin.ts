import {makeAddPgTableOrderByPlugin, orderByAscDesc } from "graphile-utils";

export const PgOrderGovProposalVotesByBlockHeight = makeAddPgTableOrderByPlugin(
  "app",
  "gov_proposal_votes",
  ({ pgSql: sql }) => {
    const sqlIdentifier = sql.identifier(Symbol("block"));
    return orderByAscDesc(
      "GOV_PROPOSAL_VOTES_BY_BLOCK_HEIGHT",
      ({ queryBuilder }) => sql.fragment`(
        select ${sqlIdentifier}.height
        from app.blocks as ${sqlIdentifier}
        where ${sqlIdentifier}.id = ${queryBuilder.getTableAlias()}.block_id
        order by ${sqlIdentifier}.height
      )`
    );
  }
);

