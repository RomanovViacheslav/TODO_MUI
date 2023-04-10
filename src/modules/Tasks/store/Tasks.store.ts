import { makeObservable, observable, action, computed, runInAction } from 'mobx';

import { TaskEntity, TasksStatsEntity, SearchFilterTaskEntity } from 'domains/index';
import { TaskAgentInstance } from 'http/index';
import { mapAllTasks, mapSearchFilterToQuery, mapTaskStats } from 'helpers/index';

type PrivateFields = '_error' | '_isLoading' | '_tasks' | '_tasksStats' | '_searchForm';

class TasksStore {
  private _isLoading = false;
  private _error: string | null = null;
  private _tasks: TaskEntity[] | null = null;
  private _tasksStats: TasksStatsEntity | null = null;
  private _searchForm: SearchFilterTaskEntity = {
    name_like: '',
    filters: {},
  };

  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _isLoading: observable,
      _error: observable,
      _tasks: observable,
      _tasksStats: observable,
      _searchForm: observable,

      isLoading: computed,
      error: computed,
      tasks: computed,
      tasksStats: computed,

      loadTasks: action,
      deleteTask: action,
      toggleTaskImportance: action,
      toggleTaskCompletion: action,
    });
  }

  get isLoading() {
    return this._isLoading;
  }

  get error() {
    return this._error;
  }

  get tasks() {
    return this._tasks;
  }

  get tasksStats() {
    return this._tasksStats;
  }

  getTasks = async (searchParams: SearchFilterTaskEntity) => {
    const externalSearchParams = mapSearchFilterToQuery(searchParams);
    const res = await TaskAgentInstance.getAllTasks(externalSearchParams);

    return {
      tasks: mapAllTasks(res),
      stats: mapTaskStats(res),
    };
  };

  loadTasks = async (searchParams?: SearchFilterTaskEntity) => {
    this._isLoading = true;
    if (searchParams) {
      this._searchForm = searchParams;
    } else {
      this._searchForm = {
        name_like: '',
        filters: {},
      };
    }
    try {
      const { tasks, stats } = await this.getTasks(this._searchForm);
      runInAction(() => {
        this._tasks = tasks;
        this._tasksStats = stats;
      });
    } catch (error) {
      runInAction(() => {
        this._tasks = null;
        this._tasksStats = null;
        if (error instanceof Error) {
          this._error = error.message;
        }
      });
    } finally {
      runInAction(() => {
        this._isLoading = false;
      });
    }
  };

  deleteTask = async (taskId: TaskEntity['id']) => {
    this._isLoading = true;

    try {
      await TaskAgentInstance.deleteTask(taskId);
      const { tasks, stats } = await this.getTasks(this._searchForm);

      runInAction(() => {
        this._tasks = tasks;
        this._tasksStats = stats;
      });
    } catch (error) {
      runInAction(() => {
        this._tasks = null;
        this._tasksStats = null;
        if (error instanceof Error) {
          this._error = error.message;
        }
      });
    } finally {
      runInAction(() => {
        this._isLoading = false;
      });
    }
  };

  modifyTask = async (taskId: string, updateFields: object) => {
    this._isLoading = true;

    try {
      await TaskAgentInstance.updateTask(taskId, updateFields);

      const { tasks, stats } = await this.getTasks(this._searchForm);

      runInAction(() => {
        this._tasks = tasks;
        this._tasksStats = stats;
      });
    } catch (error) {
      runInAction(() => {
        this._tasks = null;
        this._tasksStats = null;
        if (error instanceof Error) {
          this._error = error.message;
        }
      });
    } finally {
      runInAction(() => {
        this._isLoading = false;
      });
    }
  };
  toggleTaskImportance = async (taskId: string, currentState: boolean) => {
    const updateFields = {
      isImportant: !currentState,
    };

    await this.modifyTask(taskId, updateFields);
  };

  toggleTaskCompletion = async (taskId: string, currentState: boolean) => {
    const updateFields = {
      isCompleted: !currentState,
    };

    await this.modifyTask(taskId, updateFields);
  };
}

export const TasksStoreInstance = new TasksStore();
