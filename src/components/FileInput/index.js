import React, { PropTypes } from 'react'
import SearchInput from '../SearchInput'
import { Button, Modal, ProgressBar } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import { File, Download } from '../../resources/icons';

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
  },
  filePreviewContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  filePreview: {
    width: 100,
    height: 100,
    marginLeft: 5,
    marginRight: 5
  }
}

const FileInput = ({
  onSelectFiles,
  progress,
  showProgress,
  onFetch,
  files,
  show
}) => {
  return (
    <Modal
      bsSize="lg"
      show={show}
      onHide={() => console.log('hide!')}
    >
      <Modal.Header>
        <Modal.Title>Select File</Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.body}>
        <div style={styles.fromFileContainer}>
          <Dropzone onDrop={onSelectFiles}>
            <div style={styles.dropzone}>
              <File size={48} color="#d3d3d3"/>
            </div>
          </Dropzone>
          <h5>Drop files or click to open file prompt</h5>
          {
            files.length !== 0 && <div style={styles.filePreviewContainer}>
              {
                files.map((file, i) => (
                  <img src={file} style={styles.filePreview} key={i} />
                ))
              }
            </div>
          }
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
            buttonContent={<div><Download style={{marginRight: 5}}/><span>Fetch</span></div>}
            onFilterClick={onFetch}
             />
        </div>

        <div style={styles.progressBarContainer}>
          {showProgress &&
            <div style={{textAlign: 'center'}}>
              <h4>Progress</h4>
              <ProgressBar style={{width: '100%'}} now={progress} label={`${progress}%`} />
            </div>
          }
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

FileInput.propTypes = {
  onSelectFiles: PropTypes.func,
  progress: PropTypes.number,
  showProgress: PropTypes.bool,
  onFetch: PropTypes.func,
  files: PropTypes.array,
  show: PropTypes.bool
}

export default FileInput
