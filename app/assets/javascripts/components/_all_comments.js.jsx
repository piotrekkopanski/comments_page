class AllComments extends React.Component {

  handleDelete = (id) => {
    this.props.handleDelete(id);
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
          <h3 className = "description">{comment.description}</h3>
          <button className = "remove" onClick={(e) => this.handleDelete(comment.id, e)}>X</button>
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