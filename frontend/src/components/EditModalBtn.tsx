"use client";

import { API_URL } from "@/constants/api";
import { editModalType } from "@/types/type";
import axios from "axios";
import { useState } from "react";

const EditModalBtn = ({
  editModal,
  setEditModal,
  userData,
  refreshList,
}: editModalType) => {
  const [updateData, setUpdateData] = useState("");
  const [errorHandling, setErrorHandling] = useState("");

  const handleCallEditAPI = async (userID: string, updateName: string) => {
    try {
      await axios.put(`${API_URL}/edit-task/${userID}`, { name: updateName });
      setEditModal(false);
      setUpdateData("");
      refreshList();
      setErrorHandling("");
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        setErrorHandling(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <div className="text-center">
        <dialog className={`modal ${editModal ? "modal-open" : ""}`}>
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => {
                  setEditModal(false);
                  setUpdateData("");
                  refreshList();
                  setErrorHandling("");
                }}
              >
                ✕
              </button>
            </form>
            <h1 className="text-2xl">
              Edit <b>{userData.userName}</b>
            </h1>
            <div>
              <input
                className="input input-bordered my-5 mx-2 w-2/3"
                placeholder={userData.userName}
                value={updateData}
                onChange={(event) => setUpdateData(event?.target.value)}
              ></input>
              <button
                className="btn btn-primary w-1/3"
                onClick={() => handleCallEditAPI(userData.userID, updateData)}
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

export default EditModalBtn;
