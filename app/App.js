var React = require('react');
var ReactDOM = require('react-dom');
var Notie = require('notie');
var Clipboard = require('clipboard');
var Editor = require('./components/Editor');
var caliche = require('./utils/caliche');

function getParagraphs (text, number) {
	if (number > text.length) { return;	}
	return text.slice(0, number).join('\n\n');
}

var App = React.createClass({
	getInitialState: function () {
		var numberOfParagraphs = 1;
		
    return {
      numberOfParagraphs: numberOfParagraphs,
      maxNumberOfParagraphs: 5,
      inputTitle: 'Párrafo',
      text: getParagraphs(caliche, numberOfParagraphs)
    }
  },
  handleUpdateParagraphs: function (e) {
  	var inputTitle = 'Párrafos';
  	var numberOfParagraphs = e.target.value;

  	if (numberOfParagraphs > 5) {
  		Notie.alert(3, 'No fregués', 2);
  	} else {
  		if (numberOfParagraphs == 1) { inputTitle = 'Párrafo'; }
  		this.setState({
  			inputTitle: inputTitle,
	      numberOfParagraphs: e.target.value,
	      text: getParagraphs(caliche, e.target.value)
	    });
  	}
  },
  handleCopyTextSuccess: function () {
  	Notie.alert(1, 'Copiado jefe', 2);
  	console.log('Copiado');
  },
  componentDidMount: function () {

  },
	render: function () {
		return (
			<Editor 
				text={this.state.text}
				inputTitle={this.state.inputTitle}
				numberOfParagraphs={this.state.numberOfParagraphs}
				handleUpdateParagraphs={this.handleUpdateParagraphs}
				handleCopyTextSuccess={this.handleCopyTextSuccess} />
		)
	}	
});

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);
