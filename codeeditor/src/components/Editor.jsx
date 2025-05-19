import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { oneDark } from '@codemirror/theme-one-dark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

function Editor(props) {
  const [open, setOpen] = useState(true);

  const getLanguageExtension = (lang) => {
    switch (lang) {
      case 'javascript':
        return javascript();
      case 'xml':
        return html();
      case 'css':
        return css();
      default:
        return javascript();
    }
  };

  return (
    <div className={`editor-container ${open ? '' : 'grow-0'}`}>
      {/* Title bar */}
      <div className='editor-titlebar'>
        {props.displayName}
        <button onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} className='icon-button' />
        </button>
      </div>

      {/* Code editor */}
      {open && (
        <CodeMirror
          className='editor-content'
          value={props.value}
          height="200px"
          theme={oneDark}
          extensions={[getLanguageExtension(props.language)]}
          onChange={(value) => props.onChange(value)}
        />
      )}
    </div>
  );
}

export default Editor;
