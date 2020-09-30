export interface IItem {
  id: string;
  text: string;
  date: string;
  complete: boolean;
}

interface IState {
  data: IItem[];
  sortedData: IItem[];
  filteredData: IItem[];
}

export interface IUpdateMainStateCB {
  (state: IState): void;
}
