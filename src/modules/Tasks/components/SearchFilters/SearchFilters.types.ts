import { FiltersType } from 'domains/index';

export interface SearchFiltersProps {
  filters: FiltersType;
  onChange: ({ isImportant, isDone }: FiltersType) => void;
  disabled?: boolean;
}
