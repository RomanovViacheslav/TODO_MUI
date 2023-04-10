import { BasicAgent } from './Basic.agent';
import {
  GetAllTasksQuery,
  GetAllTasksResponse,
  UpdateTaskRequestBody,
  UpdateTaskResponse,
  GetOneTaskResponse,
  CreateTaskRequestBody,
  CreateTaskResponse,
} from 'http/model';

class TaskAgent extends BasicAgent {
  constructor() {
    super(process.env.APP_API_URL as string);
  }

  async getAllTasks(query?: GetAllTasksQuery): Promise<GetAllTasksResponse> {
    try {
      const { data } = await this._http.get('/tasks', { params: query });
      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Произошла ошибка: ${error.message}`);
      }
      throw error;
    }
  }
  async getOneTask(taskId: string): Promise<GetOneTaskResponse> {
    try {
      const { data } = await this._http.get(`/tasks/${taskId}`);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Произошла ошибка: ${error.message}`);
      }
      throw error;
    }
  }
  async updateTask(taskId: string, query: UpdateTaskRequestBody): Promise<UpdateTaskResponse> {
    try {
      const { data } = await this._http.patch(`/tasks/${taskId}`, query);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Произошла ошибка: ${error.message}`);
      }
      throw error;
    }
  }
  async createTask(query: CreateTaskRequestBody): Promise<CreateTaskResponse> {
    try {
      const { data } = await this._http.post(`/tasks`, query);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Произошла ошибка: ${error.message}`);
      }
      throw error;
    }
  }

  async deleteTask(taskId: string): Promise<void> {
    try {
      await this._http.delete(`/tasks/${taskId}`);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  }
}

export const TaskAgentInstance = new TaskAgent();
