export enum PullRequestState {
    Open = 'open',
    Closed = 'closed'
}

export class PullRequest {
    public name: string;
    public id: number;
    public author: string;
    public state: PullRequestState;
    public repository: string;
    public organization: string;
}
