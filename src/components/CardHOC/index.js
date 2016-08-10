import React, { PropTypes } from 'react'


const Card = (ComposedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.showDeleteAlert = this.showDeleteAlert.bind(this);
      this.hideDeleteAlert = this.hideDeleteAlert.bind(this);
      this.makeDeleted = this.makeDeleted.bind(this);

      this.state = {
        isDeleted: false,
        deleteAlertOpen: false
      };
    }

    showDeleteAlert(_id, name) {
      this.setState({
        deleteAlertOpen: true
      });
    }

    hideDeleteAlert() {
      this.setState({
        deleteAlertOpen: false
      })
    }

    makeDeleted() {
      this.setState({
        isDeleted: true
      })
    }

    render() {
      const { isDeleted, deleteAlertOpen } = this.state
      return <ComposedComponent
        isDeleted={isDeleted}
        deleteAlertOpen={deleteAlertOpen}
        hideDeleteAlert={this.hideDeleteAlert}
        makeDeleted={this.makeDeleted}
        {...this.props}
        />
    }
  }
}

export default Card;
