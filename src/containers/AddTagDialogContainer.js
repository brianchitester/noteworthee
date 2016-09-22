import React from 'react';
import AddTagDialog from 'components/AddTagDialog';
import Rebase from 're-base';
import _ from 'underscore';
const base = Rebase.createClass('https://noteworthyapp.firebaseio.com');

export default class AddTagDialogContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  addTags(newTags) {
    let oldTags = this.props.tagList && this.props.tagList.length ? this.props.tagList : [];
    base.post(`teams/${this.props.teamName}/${this.props.boardName}/${this.props.note}/tags`, {
      data: _.uniq(oldTags.concat(newTags))
    });
    this.props.handleDialogClose();
  }

  render() {
    return (
      <AddTagDialog
        handleSubmitTags={this.addTags.bind(this)}
        {...this.props}
      />
    );
  }
}

export default AddTagDialogContainer;