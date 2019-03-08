import { SessionLoginInformation } from './interfaces';
export class UserSettings implements SessionLoginInformation {
    private _githubApi: string;
    private _githubToken: string;
    private _usersList: string;

    constructor(githubApi?: string, githubToken?: string, usersList?:string) {
        this._githubApi = githubApi;
        this._githubToken = githubToken;
        this._usersList = usersList;
    }

    set githubApi(api: string) {
        this._githubApi = api;
    }

    set githubToken(token: string) {
        this.githubToken = token;
    }

    set usersList(users: string) {
        this.usersList = users;
    }

    get githubApi(): string {
        return this._githubApi;
    }

    get githubToken(): string {
        return this.githubToken;
    }

    get usersList(): string {
        return this.usersList;
    }

    getTokenizedListOfUsers(): string[] {
        return [this.usersList];
    }
}
