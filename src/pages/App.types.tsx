export interface IItem {
  id: string;
  text: string;
  date: string;
  complete: boolean;
}

export interface IMainState {
  data: IItem[];
  sortedData: IItem[];
  filteredData: IItem[];
}

export interface IUpdateStateCB {
  (state: IMainState): void;
}

export interface IUpdateStateBase {
  updateState: (callBack: IUpdateStateCB) => void;
}
