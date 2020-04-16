import { GithubUser } from './githubuser.interface';
export interface GithubUsersResp {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithubUser[];
}
