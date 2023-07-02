import { Athlete } from "../Athlete";
import { User } from "../User";

export interface LoginDTO{
    user: User;
    athlete: Athlete;
}