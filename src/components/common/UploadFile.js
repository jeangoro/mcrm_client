import React, { useState } from "react";
import uploadImageIcon from "../../assets/images/profile.png";
import uploadFileIcon from "../../assets/images/upload2.jpg";
import { Col, Row } from "reactstrap";

const UploadFile = ({ fileType, maxFileSize }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileSize, setFileSize] = useState(null);

  const selectImageProfile = () => {
    document.getElementById("input-file").click();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div>NB: taille max = {maxFileSize / 1024} Ko</div>
      <input
        id="input-file"
        type="file"
        name="input-file"
        accept={fileType === "image" ? "image/*" : "application/*"}
        hidden={true}
        onChange={(event) => {
          console.log(event.target.files[0]);
          setFileSize(event.target.files[0].size);
          setSelectedFile(event.target.files[0]);
        }}
      />
      {/* 677 98 12 62 */}
      <img id="id-file" alt="not found" width={"150px"} src={selectedFile ? URL.createObjectURL(selectedFile) : fileType === "image" ? uploadImageIcon : uploadFileIcon} onClick={selectImageProfile} />
      <div>taille de votre fichier = {fileSize / 1024} Ko</div>
      {fileSize > maxFileSize && <div className="alert bg-danger">Votre fichier est très lourd.</div>}
      {selectedFile && (
        <Row>
          <Col md={6}>
            <button onClick={selectImageProfile}>Changer</button>
          </Col>
          <Col md={6}>
            <button onClick={() => setSelectedFile(null)}>Supprimer</button>
          </Col>
        </Row>
      )}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default UploadFile;
