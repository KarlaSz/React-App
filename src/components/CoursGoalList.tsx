import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as cGoal } from "../App.tsx";

type CourseGoalListProps = {
  goals: cGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} onDelete={onDeleteGoal} title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
