"use client";

import { API_URL } from "@/constants/api";
import { deleteModalType } from "@/types/type";
import axios from "axios";
import React from "react";

const DeleteModal = ({
  deleteModal,
  setDeleteModal,
  userData,
  refreshList,
}: deleteModalType) => {
  const handleCallDeleteAPI = async (userID: string) => {
    try {
      await axios.delete(`${API_URL}/delete-task/${userID}`);
      setDeleteModal(false);
      refreshList();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  return (
    <div>
      <dialog className={`modal ${deleteModal ? "modal-open" : ""}`}>
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setDeleteModal(false)}
            >
              ✕
            </button>
          </form>
          <h1 className="font-bold text-2xl">Delete</h1>
          <p className="py-4">
            Are you sure to delete
            <span className="text-xl font-bold mx-2">{userData.userName}</span>
          </p>
          <button
            className="btn btn-primary"
            onClick={() => handleCallDeleteAPI(userData.userID)}
          >
            Submit
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteModal;
