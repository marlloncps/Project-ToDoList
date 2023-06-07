import { Component, ChangeEvent } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { InputState, InputProps } from '../Interfaces';

export default class Input extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    console.log(props);
    
    this.state = {
      inputValue: '',
    };
    library.add(faPlus);
  }

  inputHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  render() {
    return (
      <>
        <div className='container'>
          <div className='form__group field'>
            <input
              type='input'
              className='form__field'
              placeholder='Name'
              name='name'
              id='name'
              onChange={this.inputHandleChange}
              autoComplete='off'
              required
            />
            <label htmlFor='name' className='form__label'>
              Adicione uma tarefa
            </label>

            <FontAwesomeIcon
              onClick={this.props.teste}
              id='icon-add'
              icon={faPlus}
            />
          </div>
        </div>
      </>
    );
  }
}
