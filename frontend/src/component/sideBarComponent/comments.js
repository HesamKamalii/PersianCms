import React, { useContext, useEffect } from "react";
import ErrorBox from "../ErrorComponent/errorBox";
import projectContext from "../../Context/projectContext";
import CommnetBodyModal from "../../Modals/commentBodyModal";
import DeleteModal from "../../Modals/deleteModal";
import EditModal from "../../Modals/editModal";
import AcceptCommentModal from "../../Modals/acceptCommentModal";

export default function Comments() {
  const contextData = useContext(projectContext);
  useEffect(() => {
    contextData.getAllComments();
  }, []);

  const deleteModalSubmitAction = () => {
    fetch(`http://localhost:8000/api/comments/${contextData.commentID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        contextData.getAllComments();
        contextData.setOpenDeleteModal(false);
      });
  };
  const updateCommentInfos = () => {
    console.log(contextData.commentsInfos);

    fetch(`http://localhost:8000/api/comments/${contextData.commentID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: contextData.commentsInfos }),
    })
      .then((res) => res.json())
      .then((result) => contextData.getAllComments());

    contextData.setOpenEditModal(false);
  };

  const acceptComment = () => {
    fetch(
      `http://localhost:8000/api/comments/accept/${contextData.commentID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      }
    )
      .then((res) => res.json())
      .then((result) => {
        contextData.getAllComments();
        contextData.setOpenAcceptModal(false);
        console.log(result);
      });

    console.log("comment accepted");
  };

  return (
    <>
      {contextData.allComments.length ? (
        <div className="mt-5">
          <table className="tableStyle">
            <thead>
              <tr className="text-center p-2">
                <th>اسم کاربر</th>
                <th>محصول</th>
                <th>کامنت</th>
                <th>تاریخ</th>
                <th>ساعت</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {contextData.allComments
                .slice() // برای جلوگیری از تغییر مستقیم در `contextData.allComments`
                .reverse()
                .map((comment) => (
                  <tr key={comment.id} className="tableTd">
                    <td>{comment.userID}</td>
                    <td>{comment.productID}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => {
                          console.log("text clicked");

                          contextData.setOpenCommnetBodyModal(true);
                          contextData.setCommentsInfos(comment);
                        }}
                      >
                        متن کامنت
                      </button>
                    </td>
                    <td>{comment.date}</td>
                    <td>{comment.hour}</td>
                    <td>
                      <div className="tableBottunsDiv ">
                        <button
                          className="btn"
                          onClick={() => {
                            console.log("edit clicked");
                            contextData.setOpenEditModal(true);
                            contextData.setCommentID(comment.id);
                            contextData.setCommentsInfos(comment.body);
                          }}
                        >
                          ویرایش
                        </button>
                        <button
                          className="btn"
                          onClick={() => {
                            contextData.setCommentID(comment.id);
                            contextData.setOpenDeleteModal(true);
                          }}
                        >
                          حذف
                        </button>
                        <button className="btn">پاسخ</button>
                        {comment.isAccept === 0 && (
                          <button
                            className="btn"
                            onClick={() => {
                              contextData.setCommentID(comment.id);
                              contextData.setOpenAcceptModal(true);
                            }}
                          >
                            تایید
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <ErrorBox message={"کامنتی"} />
      )}
      <CommnetBodyModal />
      <DeleteModal
        submitAction={deleteModalSubmitAction}
        message={"آیا از حذف کامنت انتخاب شده اطمینان دارید؟"}
      />
      <AcceptCommentModal
        submitCommentAction={acceptComment}
        message={"آیا از تایید کامنت انتخاب شده اطمینان دارید؟"}
      />
      <EditModal onSubmit={updateCommentInfos}>
        <textarea
          cols={60}
          value={contextData.commentsInfos}
          onChange={(event) => contextData.setCommentsInfos(event.target.value)}
        />
      </EditModal>
    </>
  );
}
