import React from 'react';

class AutocorrectTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <div className="text-center">
        <textarea data-testid="textarea" ref={this.textAreaRef} rows={10} cols={80}
          className="card" value={this.state.text}
          onChange={e => {
            let temp = e.target.value;
            let lastChar = temp.substr(temp.length - 1, temp.length);
            //console.log("lastChar is = " + lastChar);
            if (lastChar === ' ') {
              //console.log("temp is = " + temp+"<");
              let words = e.target.value.split(' ');
              let lastWord = words[words.length - 2];
              //console.log("lastWord=" + lastWord);
              if (this.props.corrections[lastWord] !== undefined) {
                words[words.length - 2] = this.props.corrections[lastWord];
              }
              let text = words.join(' ');
              this.setState({ text: text });
            }
            else{
              this.setState({ text: e.target.value });
            }
          }}
        />
      </div>
    );
  }
}

export default AutocorrectTextarea;
