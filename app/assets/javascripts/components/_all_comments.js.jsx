class AllComments extends React.Component {

  handleDelete = (id) => {
    this.props.handleDelete(id);
  }

  onUpdate = (comment) => {
    this.props.onUpdate(comment);
  }

  render() {
    if (this.props.comments.length == 0) {
      return (
        <div>
          <h3>Add First Comment</h3>
        </div>
      )
    }

    var comments= this.props.comments.map((comment) => {
      return (
        <div key={comment.id} className = "comment">
          <Comment comment={comment}
            handleDelete={(e) => this.handleDelete(comment.id, e)}
            handleUpdate={this.onUpdate}/>
        </div>
      )
    });

    return(
      <div className = "box">
        {comments}
      </div>
    )
  }
}