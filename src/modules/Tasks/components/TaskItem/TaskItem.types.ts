import { TaskEntity } from 'domains/index';
import { ThemeType } from 'src/theme/index';
export type TaskItemProps = {
  task: TaskEntity;
  deleteTask: (id: string) => void;
  clickIsDone: (id: string, state: boolean) => void;
  clickIsImportant: (id: string, state: boolean) => void;
};

export type TypographyProps = {
  done: string;
  important: string;
  theme?: ThemeType;
};

export type BoxProps = {
  theme?: ThemeType;
};
