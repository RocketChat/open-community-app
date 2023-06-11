type Team = `@RocketChat/${string}`;

interface IPullRequestEntry {
    // pr number
    id: number;
    owners: Array<Team>;
    reviewed?: { by: string /* username */ };
}

/*
    only handle
    1. pr created
        - check if by core team, if yes, ignore
        - check if not core team, request review by the open source chapter github team
    2. review requested
        - ?? handle events caused by itself
        - backend vs frontend vs omnichannel - three fronts as of today
*/
