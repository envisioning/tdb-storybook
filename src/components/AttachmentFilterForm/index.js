
import React, { PropTypes } from 'react'
import Select from 'react-select';
import Slider from 'rc-slider';
import { FormGroup } from 'react-bootstrap';

const TYPE_OPTIONS = [
  { value: 'article', label: 'Article' },
  { value: 'whitepaper', label: 'Whitepaper' },
  { value: 'news', label: 'News' },
  { value: 'product_page', label: 'Product Page' },
  { value: 'media', label: 'Media' }
];

const AttachmentsFilterForm = ({
  type,
  onChangeType,
}) => {
  return (
    <form style={{padding: 10}}>
      <FormGroup>
        <label htmlFor="type">Type</label>
        <Select
          name="type"
          multi={true}
          options={TYPE_OPTIONS}
          value={type}
          onChange={onChangeType}
        />
      </FormGroup>
    </form>
  )
}


export default AttachmentsFilterForm;
