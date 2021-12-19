/**
 * firestore登録テスト
 */
import React from "react";
import Button from "@material-ui/core/Button";
import { db } from "./firebase";

const RegTest: React.FC = () => {
  const onReg = () => {
    const docId = db.collection("parkInfos").doc().id;
    db.collection("parkInfos").doc(docId).set({
      docID: docId,
      parkname: "test",
      address: "じゅうしょ",
    });
  };

  return (
    <Button variant="contained" onClick={onReg}>
      登録
    </Button>
  );
};

export default RegTest;
