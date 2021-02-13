import React, { Component } from "react";

import * as LocalAuthentication from "expo-local-authentication";
// - this example component supports both the
//   legacy device-specific (Android < v23) and
//   current (Android >= 23) biometric APIs
// - your lib and implementation may not need both
export default class BiometricPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessageLegacy: undefined,
      biometricLegacy: undefined,
    };

    this.description = null;
  }

  componentDidMount() {
    // this.fuckSake;
    this.checkDeviceForHardware();
  }
  //     let compatible = await LocalAuthentication.hasHardwareAsync();
  //     if (compatible) {
  //     alert('Compatible Device!');
  //     }
  //     else alert('Current device does not have the necessary hardware!');
  //    };

  checkDeviceForHardware = async () => {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    if (compatible) {
      alert("Compatible Device!");
    } else alert("Current device does not have the necessary hardware!");
  };

  render() {
    return false;
  }
}
