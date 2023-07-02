import { Athlete } from "../Athlete";
import { Exercise } from "../Exercise";
import { Training } from "../Training";

export interface NewExerciseDTO{
    exercise: Exercise;
    athlete: any;
    training: Training;
}