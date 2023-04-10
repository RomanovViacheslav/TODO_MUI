import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { TaskList, SearchTask, TasksStats } from './components';
import { TasksStoreInstance } from './store';

export function TasksComponent() {
  useEffect(() => {
    TasksStoreInstance.loadTasks();
  }, []);

  return (
    <>
      <SearchTask />
      <TasksStats />
      <TaskList />
    </>
  );
}
export const Tasks = observer(TasksComponent);
