import React, { PropTypes } from 'react'
import SearchInput from '../SearchInput'
import { Button, Modal, ProgressBar } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import { File } from '../../resources/icons';

const styles = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  dropzone: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  fromFileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10
  },
  fromUrlContainer: {
    marginBottom: 20,
    padding: 10
  },
  progressBarContainer: {

  },
  divider: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dividerRule: {
    height: 1,
    width: 200,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  dividerText:{
    marginLeft: 10,
    marginRight: 10,
    color: 'rgba(0,0,0,0.3)',
    fontStyle: 'italic'
  }
}

const FileInput = ({
  onDrop,
  progress = 10,
  showProgress
}) => {
  return (
    <Modal
      bsSize="lg"
      show={true}
      onHide={() => console.log('hide!')}
    >
      <Modal.Header>
        <Modal.Title>Select File</Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.body}>
        <div style={styles.fromFileContainer}>
          <Dropzone onDrop={onDrop}>
            <div style={styles.dropzone}>
              <File size={48} color="#d3d3d3"/>
            </div>
          </Dropzone>
          <h5>Drop files or click to open file prompt</h5>
        </div>
        <div style={styles.divider}>
          <div style={styles.dividerRule} />
          <span style={styles.dividerText}>or</span>
          <div style={styles.dividerRule} />
        </div>
        <div style={styles.fromUrlContainer}>
          <h5>Fetch file from url</h5>
          <SearchInput
            value={''}
            loading={false}
            errorfalse
            onIconClick={() => console.log('icon click')}
            onFilterClick={() => console.log('filter click')}
            onChange={() => console.log('change')}
             />
        </div>

        <div style={styles.progressBarContainer}>
          {showProgress &&
            <ProgressBar style={{width: '100%'}} now={progress} />
          }
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default FileInput
