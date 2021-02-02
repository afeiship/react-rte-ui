import React from 'react';
import classNames from 'classnames';

const CLASS_NAME = 'react-rte__toolbar';

export default class extends React.Component {
  render() {
    const { className, ...props } = this.props;
    return <nav className={classNames(CLASS_NAME, className)} {...props} />;
  }
}
