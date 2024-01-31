import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import { FaFileSignature } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
function Activities() {
  const [open, setOpen] = useState(false);
  

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className={open?'d-flex column justify-content-between align-items-center mx-1 bg-light text-dark':" bg-light text-dark mx-1"}
        style={open?{width:250,height:50,margin:"5px auto"}:{width:50,height:50,margin:"5px auto"}}
      >
      <FaFileSignature className='fs-3 mx-1'  onClick={() => setOpen(true)} />
    {open ?<>  <h5 className='mt-1'>Activities</h5>
      <RxCross1 className='fs-4 text-danger' onClick={()=>setOpen(false)}/></>: " "}

      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text"  className=' mx-1 mt-2' style={{height:"70vh"}}>
            <Card body style={{ width: '250px', }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
       
          </div>
          
        </Collapse>
      </div>
     {open &&  <div className='btn  btn-outline-danger mt-1 mx-1 '   style={{width:"100%" }}> <CiLogout className='fs-3' />Logout</div>}
    </>
  );
}

export default Activities;