import React, { useState,useRef,useEffect } from 'react';
import "../editor/editor.css"
import { Xterm } from 'xterm-react';

import { FitAddon } from 'xterm-addon-fit';
import Button from 'react-bootstrap/Button';
import { VscOutput } from "react-icons/vsc";
function CompilorBox() {
  const [Terminal, setTerminal] = useState(null);
	const [input, setInput] = useState('');
  const terminalRef = useRef(null);
  const terminal = terminalRef.current;
   const [cols, setCols] = useState(80);
  const [rows, setRows] = useState(25);

  const handleResize = (event) => {
    setCols(event.cols);
    setRows(event.rows);
  };

  useEffect(() => {
  if (Terminal) {
    // Load FitAddon
    const fitAddon = new FitAddon();
    Terminal.loadAddon(fitAddon);

    // Handle resizing
    const handleTerminalResize = () => {
      fitAddon.fit();
    };

    // Attach the event listener after the terminal is initialized
    fitAddon.fit();
    window.addEventListener('resize', handleTerminalResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleTerminalResize);
    };
  }
}, [Terminal]);
  useEffect(() => {
    // Access the terminal instance directly from the ref
    
    if (Terminal) {
      // Load FitAddon
      Terminal.loadAddon(new FitAddon());

      // Handle resizing
      window.addEventListener('resize', () => {
        terminal.fit();
      });
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);
	const onTermInit = (term, codeOutput) => {
    setTerminal(term);
    term.reset();
    term.write('Hello, your output will display here\r\n'); // Initial message on a new line
    term.write('--------------output-----------\r\n');
    term.write("hhh"); // Write the code output
  };

	const onTermDispose = (term) => {
		setTerminal(null);
	};

	const handleData = (data) => {
    if (Terminal) {
      const code = data.charCodeAt(0);
  
      // If the user hits the Enter key and there is something typed, echo it.
      if (code === 13 && input.length > 0) {
        Terminal.write("\r\nYou typed: '" + input + "'\r\n");
        Terminal.write('echo> ');
        setInput('');
      } else if (code === 8) {
        // Handle backspace
        const currentLine = Terminal.buffer.active.getLine(Terminal.buffer.active.baseY);
        const cursorX = currentLine ? currentLine.length : 0;
  
        // Only delete if the cursor is not at the beginning of the line
        if (cursorX > 0) {
          Terminal.write('\b \b'); // Move back and write a space to erase the character
          setInput(input.slice(0, -1)); // Remove the last character from the input
        }
      } else if (code < 32 || code === 127) {
        console.log('Control Key', code);
        // Disable control Keys such as arrow keys
        return;
      } else {
        // Add general key press characters to the terminal
        Terminal.write(data);
        setInput(input + data);
      }
    }
	};

  return (
    <>
    <Button
       
        aria-controls="example-collapse-text"
        className='d-flex column justify-content-between align-items-center mx-1 bg-light  text-dark'
       style={{width:"100%",margin:"5px auto"}}
      >
      <div><VscOutput className='fs-3 mx-1 '   /><span className='fs-5' style={{marginTop:40}}>Result</span></div>
 
<div className='btn btn-outline-danger' onClick={()=>onTermInit(Terminal)}>Clear</div>
      </Button>
     
     
		
				<Xterm
   
  style={{width:"100%",height:"100%"}}
     
					onInit={onTermInit}
          onResize={handleResize}
					onDispose={onTermDispose}
					onData={handleData}
         
				/>
		
	
     

      
    </>
  );
}

export default CompilorBox;