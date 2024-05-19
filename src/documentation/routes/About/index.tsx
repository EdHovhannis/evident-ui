import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Syntax from 'react-syntax-highlighter';

export class About extends React.Component {
  state = {
    value: `function name(params:type)`,
    copied: false,
  };

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Syntax>{this.state.value}</Syntax>

        <div>
          <CopyToClipboard
            text={this.state.value}
            onCopy={() => this.setState({ copied: true })}
          >
            <button>Copy to clipboard with button</button>
          </CopyToClipboard>
        </div>

        {this.state.copied ? (
          <span style={{ color: 'red' }}>Copied.</span>
        ) : null}
      </div>
    );
  }
}
