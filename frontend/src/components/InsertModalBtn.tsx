"use client";

import { API_URL } from "@/constants/api";
import { insertModalType } from "@/types/type";
import axios from "axios";
import { useState } from "react";

const InsertModalBtn = ({ refreshList }: insertModalType) => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [errorHandling, setErrorHandling] = useState("");
  const [inputTask, setInputTask] = useState("");

  const handleAddTask = async () => {
    try {
      await axios.post(`${API_URL}/add-task`, {
        name: inputTask,
      });
      setOpenModal(false);
      setInputTask("");
      refreshList();
    } catch (error) {
      console.error("Error in handleAddTask:", error);
      if (axios.isAxiosError(error) && error.response) {
        setErrorHandling(error.response.data.message);
      }
    }
  };

  return (
    <div className="text-center">
      <div
        className="bg-gray-200 rounded w-full my-3 hover:bg-gray-300 btn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <div>Insert new task</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </div>
      <div>
        <dialog
          className={`modal ${isOpenModal ? "modal-open" : ""}`}
          open={isOpenModal}
        >
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                ✕
              </button>
            </form>
            <h1 className="font-bold text-2xl">Insert</h1>
            <div>
              <input
                placeholder="Enter your content here"
                className="input input-bordered my-5 mx-2 w-2/3"
                value={inputTask}
                onChange={(event) => {
                  setInputTask(event.target.value);
                }}
              ></input>
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleAddTask();
                }}
              >
                Submit
              </button>
            </div>
            <div className="alert-error text-red-500">{errorHandling}</div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default InsertModalBtn;
