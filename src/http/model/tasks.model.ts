import { paths } from './todo.swagger';

// все задачи
export type GetAllTasksQuery = paths['/tasks']['get']['parameters']['query'];
export type GetAllTasksResponse = paths['/tasks']['get']['responses']['200']['content']['application/json'];

// одна задача
export type GetOneTaskQuery = paths['/tasks/{taskId}']['get']['parameters']['path'];
export type GetOneTaskResponse = paths['/tasks/{taskId}']['get']['responses']['200']['content']['application/json'];

// удаление задачи
export type DeleteTaskQuery = paths['/tasks/{taskId}']['delete']['parameters']['path'];
export type DeleteTaskResponse =
  paths['/tasks/{taskId}']['delete']['responses']['200']['content']['application/json; charset=utf-8'];

// редактирование задачи
export type UpdateTaskQuery = paths['/tasks/{taskId}']['patch']['parameters']['path'];
export type UpdateTaskRequestBody = paths['/tasks/{taskId}']['patch']['requestBody']['content']['application/json'];
export type UpdateTaskResponse = paths['/tasks/{taskId}']['patch']['responses']['200']['content']['application/json'];

// создание задачи
export type CreateTaskRequestBody = paths['/tasks']['post']['requestBody']['content']['application/json'];
export type CreateTaskResponse = paths['/tasks']['post']['responses']['200']['content']['application/json'];
