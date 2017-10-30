import React from 'react';
// import 'codemirror/lib/codemirror.css';
// ('codemirror/theme/material.css');
// require('codemirror/theme/neat.css');
// require('codemirror/mode/xml/xml.js');
import 'codemirror/mode/javascript/javascript.js';

import {UnControlled as CodeMirror} from 'react-codemirror2';

let options = { mode: "javascript",
    lineNumbers: true,
    lineWrapping: true,
    extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]}

class CodeEditor extends React.Component {
	constructor() {
		super();
		this.state = {
			value: ''
		}
	}
	render() {
		return(
			<CodeMirror
				value="/* Write code */"
				options={options}
				className="customMirror"
				onChange={(editor, value) => {
					console.log('uncontrolled', {value});
				}}
			/>
		)
	}
}

module.exports = CodeEditor