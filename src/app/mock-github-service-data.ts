import { PullRequest, PullRequestState } from './pull-request';


export const MOCK_PULL_REQUESTS: PullRequest[] = [
    { name: 'test-pr', id: 35, author: 'chodges15', state: PullRequestState.Open, repository: 'repo', organization: 'org'},
    { name: 'test-pr2', id: 36, author: 'chodges15', state: PullRequestState.Closed, repository: 'repo', organization: 'org'},
];
