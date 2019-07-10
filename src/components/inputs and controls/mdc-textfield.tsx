import { Component, h, Element } from '@stencil/core';
import { MDCTextField } from '@material/textfield';

@Component({  
  tag: 'mdc-textfield',
  styleUrl: 'mdc-textfield.scss',
  shadow: true
})
export class MdcTextfield {

  @Element() el: HTMLElement;

  render() {
    return (
      <div id="test" class="mdc-text-field">
        <input type="text" id="my-text-field" class="mdc-text-field__input"/>
        <label class="mdc-floating-label" htmlFor="my-text-field">Label</label>
        <div class="mdc-line-ripple"></div>
      </div>
    );
  }

  componentDidLoad() {
    new MDCTextField(this.el.shadowRoot.querySelector('.mdc-text-field'));
  }

}