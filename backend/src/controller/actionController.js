import {
  addTaskAPI,
  deleteTaskAPI,
  editTaskAPI,
  getTaskAPI,
} from "../api/actionAPI.js";

const handleError = (res, response) => {
  if (response.status == "success") {
    return res.status(201).json(response);
  } else if (response.status == "failed") {
    return res.status(400).json(response);
  } else {
    return res.status(500).json(response);
  }
};

export const addTaskController = async (req, res) => {
  const name = req.body.name;
  const response = await addTaskAPI(name);
  handleError(res, response);
};

export const getTaskController = async (req, res) => {
  const response = await getTaskAPI();
  handleError(res, response);
};

export const deleteTaskController = async (req, res) => {
  const inputID = req.params.id;
  const response = await deleteTaskAPI(inputID);
  handleError(res, response);
};

export const editTaskController = async (req, res) => {
  const inputID = req.params.id;
  const updateData = req.body.name;
  const response = await editTaskAPI(inputID, updateData);
  handleError(res, response);
};
