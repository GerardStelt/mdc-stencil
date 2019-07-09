import { Component, h } from '@stencil/core';

@Component({
  tag: 'md-dialog',
  styleUrl: 'md-dialog.css',
  shadow: true
})
export class dialog {

  render() {
    return (
      <div class="modal-content">

        <md-dialog-header title="Dialog title" />

        <section>
          <p>
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
          </p>
          <p>
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
          </p>
          <p>
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
          </p>
          <p>
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
          </p>
          <p>
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
            This is the text of a very large paragragh. 
          </p>
        </section>

        <md-dialog-footer/>

      </div>
    );
  }
}