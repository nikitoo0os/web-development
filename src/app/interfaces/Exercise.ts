import { Athlete } from "./Athlete";
import { Training } from "./Training";

export interface Exercise {
  id: string;
  elapsedTime: string;
  isCompleted: boolean;
  startDate: string;
  athlete: Athlete;
  training: Training;
}
