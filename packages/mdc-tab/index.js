/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import MDCComponent from '@material/base/component';

import MDCTabAdapter from './adapter';
import MDCTabFoundation from './foundation';

/**
 * @extends {MDCComponent<!MDCTabFoundation>}
 * @final
 */
class MDCTab extends MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCTab}
   */
  static attachTo(root) {
    return new MDCTab(root);
  }

  /**
   * @return {!MDCTabFoundation}
   */
  get foundation() {
    return this.foundation_;
  }

  /**
   * @return {boolean}
   */
  get active() {
    return this.foundation_.isActive();
  }

  /**
   * @param {boolean} isActive
   */
  set active(isActive) {
    if (isActive) {
      this.foundation_.activate();
    } else {
      this.foundation_.deactivate();
    }
  }

  /**
   * @return {!MDCTabFoundation}
   */
  getDefaultFoundation() {
    return new MDCTabFoundation(/** @type {!MDCTabAdapter} */ (Object.assign({
      setAttr: (attr, value) => this.root_.setAttribute(attr, value),
      registerEventHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
      deregisterEventHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      hasClass: (className) => this.root_.classList.contains(className),
    })));
  }
}

export {
  MDCTab,
  MDCTabFoundation,
};
