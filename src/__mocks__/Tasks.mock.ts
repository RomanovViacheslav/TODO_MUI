import { TaskEntity, TasksStatsEntity } from 'domains/index';

export const TasksStatsMock: TasksStatsEntity = {
  total: 5,
  important: 4,
  done: 10,
};

export const TasksMock: TaskEntity[] = [
  {
    name: 'Поспать',
    id: '2',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: false,
    isDone: true,
  },
  {
    name: 'Поесть',
    id: '3',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: true,
    isDone: false,
  },
  {
    name: 'Попить',
    id: '4324324344',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: true,
    isDone: false,
  },
  {
    name: 'Полежать',
    id: '6',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: false,
    isDone: false,
  },
];
