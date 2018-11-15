export enum PullRequestState {
    Open = 'open',
    Closed = 'closed'
}

export class PullRequest {
    name: string;
    id: number;
    author: string;
    state: PullRequestState;
    repository: string;
    organization: string;
}
