import React, { PropTypes } from 'react'
import _ from 'lodash';
import { Search, Error, Loading, Filter } from '../../resources/icons'
import { Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap';




class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    const { onStoppedTyping } = props;

    if (onStoppedTyping && typeof onStoppedTyping === 'function') {
      this.onStoppedTyping = _.debounce(onStoppedTyping, 300)
    }
  }

  render () {
    const {
      value,
      loading,
      error,
      onIconClick,
      onFilterClick,
      buttonContent = <Filter />,
      onChange,
      onStoppedTyping
    } = this.props;

    let iconElement;

    if (error === true) {
      iconElement = <Error/>
    } else if (loading === true) {
      iconElement =  <Loading spin />;
    } else {
      iconElement =  <Search  />;
    }


    return (
      <div>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon onClick={onIconClick}>
              {iconElement}
            </InputGroup.Addon>
            <FormControl type="text" onChange={(e,v) => {onChange(e.target.value); this.onStoppedTyping()}} value={value}/>

            <InputGroup.Button>
            <Button bsStyle="primary" onClick={onFilterClick}>
              {buttonContent}
            </Button>
          </InputGroup.Button>

          </InputGroup>
        </FormGroup>
      </div>
    )
  }
}



SearchInput.propTypes = {
  value: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  onIconClick: PropTypes.func,
  onFilterClick: PropTypes.func,
  onChange: PropTypes.func
}
export default SearchInput
