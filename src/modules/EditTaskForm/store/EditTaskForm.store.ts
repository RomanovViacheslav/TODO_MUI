import { makeObservable, observable, action, computed, runInAction } from 'mobx';

import { TaskEntity, TaskUpdateEntity } from 'domains/index';
import { TaskAgentInstance } from 'http/index';
import { mapOneTask, mapToExternalUpdateTask, mapUpdateTask } from 'helpers/index';

type PrivateFields = '_error' | '_isLoading' | '_task' | '_isSuccess';
class EditTaskStore {
  private _isLoading = false;
  private _error: string | null = null;
  private _task: TaskEntity | null = null;
  private _isSuccess = false;

  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _isLoading: observable,
      _error: observable,
      _task: observable,
      _isSuccess: observable,

      isLoading: computed,
      error: computed,
      task: computed,
      isSuccess: computed,

      resetIsSuccess: action,
      editTask: action,
      loadTask: action,
    });
  }

  get isLoading() {
    return this._isLoading;
  }

  get error() {
    return this._error;
  }

  get task() {
    return this._task;
  }

  get isSuccess() {
    return this._isSuccess;
  }
  resetIsSuccess = () => {
    this._isSuccess = false;
  };

  editTask = async (task: TaskUpdateEntity, id: string) => {
    this._isLoading = true;
    this._error = null;

    const externalParams = mapToExternalUpdateTask(task);

    try {
      const result = await TaskAgentInstance.updateTask(id, externalParams);
      runInAction(() => {
        this._task = mapUpdateTask(result);
        this._isSuccess = true;
      });
    } catch (error) {
      runInAction(() => {
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

  loadTask = async (id: string) => {
    this._isLoading = true;
    this._error = null;
    this._task = null;

    try {
      const result = await TaskAgentInstance.getOneTask(id);

      const task = mapOneTask(result);
      runInAction(() => {
        this._task = task;
      });
    } catch (error) {
      runInAction(() => {
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
}

export const EditTasksStoreInstance = new EditTaskStore();
