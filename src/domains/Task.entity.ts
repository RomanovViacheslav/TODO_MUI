export interface TaskEntity {
  name: string;
  id: string;
  info: string;
  isImportant: boolean;
  isDone: boolean;
}

export interface TasksStatsEntity {
  total: number;
  important: number;
  done: number;
}

export type FiltersType = {
  isImportant?: boolean;
  isDone?: boolean;
};

export interface SearchFilterTaskEntity {
  name_like?: string;
  filters: FiltersType;
}
