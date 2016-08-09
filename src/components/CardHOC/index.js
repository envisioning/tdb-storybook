import React, { PropTypes } from 'react'


const Card = (ComposedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleClickDelete = this.handleClickDelete.bind(this);

      this.state = {
        isDeleted: false,
        showDeleteAlert: false
      };
    }

    handleClickDelete(_id, name) {
      this.setState({
        showDeleteAlert: true
      });
    }

    hideDeleteAlert() {
      this.setState({
        showDeleteAlert: false
      })
    }

    makeDeleted() {
      this.setState({
        isDeleted: true
      })
    }

    render() {
      const { isDeleted, showDeleteAlert } = this.state
      return <ComposedComponent
        isDeleted={isDeleted}
        showDeleteAlert={showDeleteAlert}
        hideDeleteAlert={this.hideDeleteAlert}
        makeDeleted={this.makeDeleted}
        {...this.props}
        />
    }
  }
}

export default Card;
