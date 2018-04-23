class Body extends React.Component {
	constructor(props, context) {
    super(props, context);
    this.state = {
      comments: [],
      value: ''
    };

    $.getJSON("/api/v1/comments.json", response => {
      this.setState({ comments: response });
    });
  }

	handleSubmit = (comment) => {
    var newState = this.state.comments.concat(comment);
    this.setState({ comments: newState })
  }

  handleDelete = (id) => {
    $.ajax({
      url: `/api/v1/comments/${id}`,
      type: 'DELETE',
      success:() => {
        this.removeComment(id);
      }
    });
  }

  handleUpdate = (comment) => {
    $.ajax({
      url: `/api/v1/comments/${comment.id}`,
      type: 'PUT',
      data: { comment: comment },
      success: () => {
        this.updateComments(comment);
      }
    });
  }
  
  removeComment(id) {
    var newComments = this.state.comments.filter((comment) => {
      return comment.id != id;
    });
    this.setState({ comments: newComments });
  }

  updateComments(comment) {
    var comments = this.state.comments.map((obj) => {
      return obj.id === comment.id ? comment : obj;
    });
    this.setState({comments: comments });
  }

  render() {
    return (
      <div>
        <AllComments comments={this.state.comments} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
        <NewComment handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}