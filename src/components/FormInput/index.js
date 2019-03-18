import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input, Label } from './styles';

class FormInput extends Component {
  state = {
    showLabel: true,
  };

  _onShowLabel = () => {
    this.setState({
      showLabel: false,
    });
  };

  _onHideLabel = () => {
    const { valueInParent } = this.props;
    if (!valueInParent) {
      this.setState({
        showLabel: true,
      });
    }
  };

  render() {
    const { label, change, valueInParent } = this.props;

    return (
      <div>
        <Wrapper>
          {this.state.showLabel ? <Label>{label}</Label> : null}
          <Input onFocus={this._onShowLabel} onBlur={this._onHideLabel} onChange={change} value={valueInParent} />
        </Wrapper>
      </div>
    );
  }
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  valueInParent: PropTypes.string,
};

export default FormInput;
