import { Component, ChangeEvent } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { InputState, InputProps } from '../Interfaces';

export default class Input extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);

    this.state = {
      inputValue: '',
    };
    library.add(faPlus);
    this.inputHandleChange = this.inputHandleChange.bind(this);
  }

  inputHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: event.target.value,
    });
  };
  render() {
    return (
      <>
        <div className='container'>
          <div className='form__group field'>
            <input
              type='input'
              className='form__field'
              placeholder='Tarefa'
              name='input-list'
              id='name'
              value={this.state.inputValue}
              onChange={this.inputHandleChange}
              autoComplete='off'
              required
            />
            <label htmlFor='name' className='form__label'>
              Adicione uma tarefa
            </label>

            <FontAwesomeIcon
              onClick={() => {
                this.props.push(this.state.inputValue);
                this.setState({
                  inputValue: ''
                })
              }}
              id='icon-add'
              icon={faPlus}
            />
          </div>
        </div>
      </>
    );
  }
}
