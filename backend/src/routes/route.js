import {
  addTaskController,
  deleteTaskController,
  editTaskController,
  getTaskController,
} from "../controller/actionController.js";

export const initWebRoute = (router, app) => {
  router.post("/api/add-task", addTaskController);
  router.get("/api/get-task", getTaskController);
  router.delete("/api/delete-task/:id", deleteTaskController);
  router.put("/api/edit-task/:id", editTaskController);
  return app.use("/", router);
};
