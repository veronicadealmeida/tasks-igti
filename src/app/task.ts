export interface Task {
  id?: number;
  status?: string | null | undefined;
  title?: string | null | undefined;
  description?: string | null | undefined;
  dateLimit?: Date | null | undefined;
  dateDone?: Date | null | undefined;
}
