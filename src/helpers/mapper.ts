import { TaskEntity, TaskUpdateEntity, AddTaskEntity, SearchFilterTaskEntity, TasksStatsEntity } from 'domains/index';
import {
  GetOneTaskResponse,
  UpdateTaskResponse,
  UpdateTaskRequestBody,
  CreateTaskResponse,
  CreateTaskRequestBody,
  GetAllTasksResponse,
  GetAllTasksQuery,
} from 'http/index';

export const mapOneTask = (data: GetOneTaskResponse): TaskEntity => {
  return {
    id: String(data.id),
    name: data.name || 'Неизвестно',
    info: data.info || 'Неизвестно',
    isImportant: data.isImportant || false,
    isDone: data.isCompleted || false,
  };
};

export const mapUpdateTask = (data: UpdateTaskResponse): TaskEntity => {
  return {
    id: String(data.id),
    name: data.name || 'Неизвестно',
    info: data.info || 'Неизвестно',
    isImportant: data.isImportant || false,
    isDone: data.isCompleted || false,
  };
};

export const mapToExternalUpdateTask = (data: TaskUpdateEntity): UpdateTaskRequestBody => {
  return {
    name: data.name || 'Неизвестно',
    info: data.info || 'Неизвестно',
    isImportant: data.isImportant || false,
    isCompleted: data.isDone || false,
  };
};

export const mapCreateTask = (data: CreateTaskResponse): TaskEntity => {
  return {
    id: String(data.id),
    name: data.name || 'Неизвестно',
    info: data.info || 'Неизвестно',
    isImportant: data.isImportant || false,
    isDone: data.isCompleted || false,
  };
};

export const mapToExternalCreateTask = (data: AddTaskEntity): CreateTaskRequestBody => {
  return {
    name: data.name || 'Неизвестно',
    info: data.info || 'Неизвестно',
    isImportant: data.isImportant || false,
    isCompleted: false,
  };
};

export const mapAllTasks = (tasks: GetAllTasksResponse): TaskEntity[] => {
  const AllTasks: TaskEntity[] = [];

  tasks.forEach((task) => {
    if (task.id) {
      AllTasks.push({
        name: task.name || 'Неизвестно',
        id: String(task.id),
        info: task.info || 'Неизвестно',
        isImportant: task.isImportant || false,
        isDone: task.isCompleted || false,
      });
    }
  });

  return AllTasks;
};

export const mapSearchFilterToQuery = (filter: SearchFilterTaskEntity): GetAllTasksQuery => {
  const query: GetAllTasksQuery = {};

  if (filter.name_like) {
    query.name_like = filter.name_like;
  }

  if (filter.filters.isImportant !== undefined) {
    query.isImportant = filter.filters.isImportant;
  }

  if (filter.filters.isDone !== undefined) {
    query.isCompleted = filter.filters.isDone;
  }

  return query;
};

export const mapTaskStats = (tasks: GetAllTasksResponse): TasksStatsEntity => {
  const total = tasks.length;
  const importantTasks = tasks.filter((task) => task.isImportant);
  const completedTasks = tasks.filter((task) => task.isCompleted);

  return {
    total,
    important: importantTasks.length,
    done: completedTasks.length,
  };
};
