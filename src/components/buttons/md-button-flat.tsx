import { Component, h, Prop, Element } from '@stencil/core';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'md-button-flat',
  styleUrl: 'md-button-flat.scss',
  shadow: true
})
export class MdButtonFlat {
  
  @Element() el: HTMLElement;
  @Prop() text: string;
  
  render() {
    return (
      <button class="mdc-button">
        <span class="mdc-button__label">{this.text}</span>
      </button>
    );
  }

  componentDidLoad() {
    new MDCRipple(this.el.shadowRoot.querySelector('.mdc-button'));
  }
}