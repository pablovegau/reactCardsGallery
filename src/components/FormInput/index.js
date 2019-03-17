import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input, Label } from './styles';

class FormInput extends Component {
  state = {
    showLabel: true,
    inputValue: '',
  };

  _onShowLabel = () => {
    this.setState({
      showLabel: false,
    });
  };

  _onHideLabel = () => {
    if (!this.state.inputValue) {
      this.setState({
        showLabel: true,
      });
    }
  };

  _onChangeInput = event => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    const { label } = this.props;

    return (
      <div>
        <Wrapper>
          {this.state.showLabel ? <Label>{label}</Label> : null}
          <Input
            onFocus={this._onShowLabel}
            onBlur={this._onHideLabel}
            onChange={this._onChangeInput}
            value={this.state.inputValue}
          />
        </Wrapper>
      </div>
    );
  }
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormInput;
