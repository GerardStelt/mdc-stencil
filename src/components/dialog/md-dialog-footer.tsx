import { Component, h } from '@stencil/core';

@Component({
  tag: 'md-dialog-footer',
  styleUrl: 'md-dialog-footer.css',
  shadow: true
})
export class MdDialogFooter {
  
  render() {
    return (
      <footer>
        <md-button-flat text="decline"/>
        <md-button-flat text="accept"/>
      </footer>
    );
  }
}