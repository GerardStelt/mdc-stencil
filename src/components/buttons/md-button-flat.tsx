import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'md-button-flat',
  styleUrl: 'md-button-flat.css',
  shadow: true
})
export class MdButtonFlat {
  
  @Prop() text: string;

  render() {
    return (
      <button>{this.text}</button>
    );
  }
}