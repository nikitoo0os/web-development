import { Exercise } from "./Exercise";

export interface Athlete {
  id: number;
  firstName: string;
  lastName: string;
  exercises: Exercise[];
}
