import React, { useRef, useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import './editor.css';

const MonacoEditor = ({ language, theme, resetEditorHandler ,resetEditor,setfiledata, filename }) => {
  const editorRef = useRef(null);
  const [editorValue, setEditorValue] = useState('// Write your code here..........');

  const handleResetClick = () => {
    // Get the Monaco Editor instance from the ref
    const editor = editorRef.current;

    // Reset the editor content to the initial value or an empty string
    editor.setValue('// Write your code here..........');
  };

  useEffect(() => {
    
    // Access the `monaco` instance after the editor has mounted
    if (window.monaco && editorRef.current) {
      const monaco = window.monaco;
      // Use `monaco` here if needed
    }
    
  }, []);

  useEffect(() => {
    if (resetEditor) {
      handleResetClick();
      resetEditorHandler(() => setEditorValue('// Write your code here..........'));
    }
  }, [resetEditor, resetEditorHandler]);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function handleScriptError(error, scriptUrl, line, column, errorObject) {
    // Handle script error
    console.error('Monaco Editor script error:', error);
  }

  function handleEditorValidation(markers) {
    // Clear existing markers
    editorRef.current.deltaDecorations([], []);

    // Access the Monaco instance
    const monaco = window.monaco;

    // Create new markers based on validation results
    const decorations = markers.map((marker) => ({
      range: new monaco.Range(
        marker.startLineNumber,
        marker.startColumn,
        marker.endLineNumber,
        marker.endColumn
      ),
      options: {
        isWholeLine: true,
        className: 'normal-marker',
        hoverMessage: {
          value: marker.message,
        },
      },
    }));

    // Apply the new markers
    editorRef.current.deltaDecorations([], decorations);
  }

  useEffect(() => {
    console.log(language);
  }, [language, theme]);

  return (
    <Editor
      height="70vh"
      language={language}
      theme={theme}
      defaultValue={editorValue}
      onChange={async(value) => {
       await setEditorValue(value);
       {filename && await setfiledata(editorValue);}
       
      }}
      onMount={handleEditorDidMount}
      onError={handleScriptError}
      onValidate={handleEditorValidation}
      className='border rounded'
      loader={{ vs: 'YOUR_MONACO_EDITOR_VERSION_URL' }} // Provide the correct version URL
    />
  );
};

export default MonacoEditor;
