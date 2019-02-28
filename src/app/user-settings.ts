import { SessionLoginInformation } from './interfaces';
export class UserSettings implements SessionLoginInformation {
    public github_api: string;
    public github_token: string;
    public list_of_users: string;

    constructor() {}

    setGithubApi(api: string) {
        this.github_api = api;
    }

    setGithubToken(token: string) {
        this.github_token = token;
    }

    setListOfUsers(users: string) {
        this.list_of_users = users;
    }

    getGithubApi(): string {
        return this.github_api;
    }

    getGithubToken(): string {
        return this.github_token;
    }

    getListOfUsers(): string {
        return this.list_of_users;
    }

    getTokenizedListOfUsers(): string[] {
        return [this.list_of_users];
    }
}
