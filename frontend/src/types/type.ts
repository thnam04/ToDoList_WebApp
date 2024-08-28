export interface UserData {
  userID: string;
  userName: string;
}
export interface Task {
  id: string;
  name: string;
}

export interface deleteModalType {
  deleteModal: Boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  userData: any;
  refreshList: () => void;
}

export interface editModalType {
  editModal: Boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  userData: { userID: string; userName: string };
  refreshList: () => void;
}

export interface insertModalType {
  refreshList: () => void;
}
