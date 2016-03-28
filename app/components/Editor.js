var React = require('react');
var ClipboardButton = require('react-clipboard.js');

function Editor (props) {

	return (
		<div className="py2">
			<div className="clearfix mb2">
				<div className="left">
					<input
						className="input h1 center mr1 rounded"
		        type="number"
		        min="1"
		        max="10"
		        maxLength="2"
		        value={props.numberOfParagraphs}
		        onChange={props.handleUpdateParagraphs}/>
					<span className="h1">{props.inputTitle}</span>
				</div>
				<div className="right">
					<ClipboardButton
						className="btn h3 rounded"
						data-clipboard-target="#caliche"
						onSuccess={props.handleCopyTextSuccess}>
		        Copiar texto
		      </ClipboardButton>
				</div>
			</div>
			<textarea
				id="caliche"
				className="input border-box col-12 p2 rounded"
				rows={props.numberOfParagraphs * 7}
				value={props.text}
				readOnly/>
		</div>
	)

}

module.exports = Editor;