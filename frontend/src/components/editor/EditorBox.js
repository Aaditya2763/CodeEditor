import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FaLaptopCode } from "react-icons/fa";
import MonacoEditor from "./Editor";

function Editor() {
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState('c');
  const [theme, setTheme] = useState('vs-light');
  const [modalMessage, setModalMessage] = useState('');
  const [savebox, setsavebox] = useState(false);
  const [filename, setfilename] = useState("");
  const [hasdata, sethasdata] = useState("false");
  const [filedata, setfiledata] = useState("");
  const [resetEditor, setResetEditor] = useState(false);
  

  const handleClose = () => {
    setShow(false);
    setsavebox(false);
  };

  
  const resetEditorHandler = async () => {
    await setResetEditor(true);
    handleClose();
    setResetEditor(false)
  };

  const filedataHandler= ()=>{
  console.log(filedata);
  } 
  const filesaveHandler = async () => {
    try {
      if(filename===""){
        alert("Enter valid file name")
        
      }
      if(filedata===""){
        handleClose(); 
        alert("You have not write any code yet!")
        
      }
      
      if(filename.length>=1 && filedata){
       await filedataHandler()
       console.log(filedata)
       setfiledata("");
       setfilename("");
       handleClose();
      }
    
    } catch (error) {
      console.log("no data found")
    }
   
    
  };

  const filenameChangeHandler = (e) => {
    setfilename(e.target.value);

  };

  useEffect(() => {
    // Add any additional logic on language and theme change if needed
  }, [language, theme]);

  return (
    <>
      {show && (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        > <Form>
          <Modal.Header closeButton>
            {savebox ? <Modal.Title>Enter File Name</Modal.Title> : <Modal.Title>Warning!</Modal.Title>}
           
          </Modal.Header>
          {savebox ? <input placeholder="Enter filename" className=" px-2 form-control " onChange={filenameChangeHandler} required  /> : <Modal.Body>{modalMessage}</Modal.Body>}

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={savebox ? filesaveHandler : resetEditorHandler}>Confirm</Button>
          </Modal.Footer>
          </Form>
        </Modal>
      )}
      <div className="d-flex row justify-content-around align-items-center mx-1">
        <Button
          aria-controls="example-collapse-text"
          className="d-flex column justify-content-between align-items-center mx-1 bg-light text-dark "
          style={{ width: "100%", margin: "5px auto" }}
        >
          <div>
            <FaLaptopCode className="fs-3 mx-1" />
            <span className="fs-5 mt-5">Editor</span>
          </div>
          <div>
            <Form.Select
              aria-label="Default select example"
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="javascript">JavaScript</option>
              {/* <option value="python">Python</option> */}
            </Form.Select>
          </div>

          <div>
            <Form.Select
              aria-label="Default select example"
              value={theme}
              onChange={(e) => {
                setTheme(e.target.value);
              }}
            >
              <option value="vs-light">Light</option>
              <option value="hc-black">Dark</option>
            </Form.Select>
          </div>
          <div>
            <div
              className="btn btn-outline-success mx-2"
              onClick={() => {
                setShow(true);
                setsavebox(true);
                setModalMessage("Click on confirm to save this code ");
              }}
            >
              Save
            </div>
            <div
              className="btn btn-outline-danger"
              onClick={() => {
                setShow(true);
                setModalMessage("Click on confirm to reset the code editor ");
              }}
            >
              Reset
            </div>
          </div>
        </Button>
        <div>
          <MonacoEditor language={language} theme={theme} resetEditor={resetEditor}  setfiledata={setfiledata} filename={filename} resetEditorHandler={resetEditorHandler} />
        </div>
        <button className=" container btn btn-outline-success" style={{ width: "90%", margin: "6px auto", alignSelf: "center" }}>Run</button>
      </div>
    </>
  );
}

export default Editor;
