import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'md-dialog-header',
  styleUrl: 'md-dialog-header.css',
  shadow: true
})
export class MdDialogHeader {
  
  @Prop() title: string = 'Dialog';

  render() {
    return (
      <h2>{this.title}</h2>
    );
  }
}