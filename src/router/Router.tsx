import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { paths } from 'constants/index';
import { PageContainer } from 'components/index';
import { AddTaskPage, TasksPage, EditTaskPage, NotFoundPage } from 'pages/index';

export function Router() {
  return (
    <Routes>
      <Route path={paths.MAIN} element={<PageContainer />}>
        <Route index element={<TasksPage />} />
        <Route path={paths.ADD} element={<AddTaskPage />} />
        <Route path={`${paths.EDIT}${paths.TASK}`} element={<EditTaskPage />} />
      </Route>
      <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
