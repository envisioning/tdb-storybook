import React, { PropTypes } from 'react'
import SearchInput from '../SearchInput'
import ResultsList from '../ResultsList'
import { Button, Modal } from 'react-bootstrap';
import { ArrowRight, Add, Remove } from '../../resources/icons';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  modal: {
    width: 900
  },
  header: {
    backgroundColor: '#d3d3d3',
    //height: 100,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    marginTop: 20
  },
  iconLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  arrowIcon: {
    marginLeft: 20,
    marginRight: 20
  },
  main: {
    display: 'flex',
    padding: 20,
    flexDirection: 'column'
  },
  footer: {
    padding: 20,
    //display: 'flex',
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //alignItems: 'center'
  },
}
const BuildRelation = ({
  hostIconElement,
  foreignIconElement,
  resultsLeft,
  resultsRight,
  searchText,
  createButtonText,
  displayForm = false,
  onCreateClick,
  onClickBackFromForm,
  onSubmitForm
}) => {
  const hostIcon = React.cloneElement(hostIconElement, {
    size: 80,
    color: '#888'
  })
  const foreignIcon = React.cloneElement(foreignIconElement, {
    size: 80,
    color: '#888'
  })
  return (
    <Modal
      bsSize="lg"
      show={true}
      onHide={() => console.log('hide!')}
      //aria-labelledby="ModalHeader"
      dialogClassName='x-large-modal'
    >
      <Modal.Header style={styles.header}>
        <div style={styles.iconLine}>
            {hostIcon} <ArrowRight size={20} style={styles.arrowIcon} /> {foreignIcon}
        </div>
        <h3 style={styles.headerText}>Build new relationship</h3>
      </Modal.Header>
      <Modal.Body style={styles.main}>
        {
          displayForm ?
          <div>
            FORM!
          </div>
          :
          <div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div style={{flexGrow: 1, width: '50%', padding: 5}}>
              {
                <div>
                  <SearchInput
                    value={searchText}
                    />
                  <ResultsList
                    showRightButton={true}
                    style={{marginBottom: 0}}
                    rightButtonElement={<Button bsStyle="success" bsSize="xsmall"><Add /></Button>}
                    results={resultsLeft} />
                </div>
                // :
                // <h3>No results found. Would you like to <a href="#" onClick={onCreateClick}>create a new one ?</a></h3>
              }
              </div>
              <div style={{flexGrow: 1, width: '50%', padding: 5}}>
                {
                  <div>
                    <Button
                      style={{marginBottom: 15, float: 'right'}}
                      bsStyle="primary"
                      onClick={onCreateClick}
                    >
                      <Add style={{marginRight: 5}}/>
                      {createButtonText}
                    </Button>
                    <ResultsList
                      showRightButton={true}
                      rightButtonElement={<Button bsStyle="danger" bsSize="xsmall"><Remove /></Button>}
                      style={{marginBottom: 0, marginLeft: 5}}
                      results={resultsRight} />
                  </div>
                }
              </div>
            </div>
          </div>
        }

      </Modal.Body>
      <Modal.Footer style={styles.footer}>
        {/*<Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>*/}
        {
          displayForm ?
          <div>
            <Button bsStyle="default" onClick={onClickBackFromForm}>Back</Button>
            <Button bsStyle="primary" onClick={onSubmitForm}>Create</Button>
          </div>
          :
          <div>
            <Button bsStyle="default">Close</Button>
          </div>
        }


      </Modal.Footer>
    </Modal>
    // <div style={styles.container}>
    //   <div style={styles.header}>
    //     {hostIcon} {foreignIcon}
    //   </div>

    //   <div style={styles.footer}>

    //   </div>
    // </div>
  )
}

BuildRelation.propTypes = {
  hostIconElement: PropTypes.element,
  foreignIconElement: PropTypes.element,
  results: PropTypes.array,
  searchText: PropTypes.string,
  createButtonText: PropTypes.string,
  displayForm: PropTypes.bool,
  onCreateClick: PropTypes.func,
  onClickBackFromForm: PropTypes.func,
  onSubmitForm: PropTypes.func
}

export default BuildRelation
