import React from 'react';
import splunkLogo from '../assets/splunk-logo-dark.svg';

const Header = () => {
  return (<header><span><img src={splunkLogo} alt="text"/></span><span style={{ fontSize: '12px' }}>Log Viewer</span></header>)
}

export default Header;