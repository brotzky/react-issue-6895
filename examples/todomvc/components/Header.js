import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TodoTextInput from './TodoTextInput';

export class Header extends Component {
  render() {
    return (
      <div>
        <ol>
          <li>Focus the example input</li>
          <li>Type into the example input</li>
          <li>Uncaught Invariant Violation: performUpdateIfNecessary: Unexpected batch number</li>
        </ol>
        <form>
          <label>Example input</label>
          <Field
            name="exampleInput"
            component={exampleInput =>
              <input type="text" {...exampleInput} />
          }/>
        </form>
        <br/>
      </div>
    );
  }
}

// uncomment line 32 and comment line 31 to fix the bug
const mapStateToProps = (state) => ({
  exampleInput: state.form.bug && state.form.bug.values.exampleInput,
  // exampleInput: state.form && state.form.bug && state.form.bug.values && state.form.bug.values.exampleInput,
});

Header = connect(mapStateToProps)(Header);

Header = reduxForm({
  form: 'bug' // a unique name for this form
})(Header);

export default Header;
