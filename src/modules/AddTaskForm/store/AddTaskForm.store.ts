import { makeObservable, observable, action, computed, runInAction } from 'mobx';

import { AddTaskEntity } from 'domains/index';
import { mapToExternalCreateTask } from 'helpers/index';
import { TaskAgentInstance } from 'http/index';

type PrivateFields = '_error' | '_isLoading' | '_isSuccess';
class AddTaskStore {
  private _isLoading = false;
  private _error: string | null = null;
  private _isSuccess = false;

  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _isLoading: observable,
      _error: observable,
      _isSuccess: observable,

      isLoading: computed,
      error: computed,
      isSuccess: computed,

      addTask: action,
      resetIsSuccess: action,
    });
  }

  get isLoading() {
    return this._isLoading;
  }

  get error() {
    return this._error;
  }

  get isSuccess() {
    return this._isSuccess;
  }

  resetIsSuccess = () => {
    this._isSuccess = false;
  };

  addTask = async (task: AddTaskEntity) => {
    this._isLoading = true;
    this._error = null;

    const externalParams = mapToExternalCreateTask(task);

    try {
      await TaskAgentInstance.createTask(externalParams);
      runInAction(() => {
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
}

export const AddTasksStoreInstance = new AddTaskStore();
