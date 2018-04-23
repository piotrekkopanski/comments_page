class NewComment extends React.Component {
  constructor(props, context) {
  super(props, context);
    this.state = {
      value: '',
      errors: ''
    };
  }

  handleClick = () => {
    var description = this.state.value;
    if (description == 0) {
      this.setState({errors: "Comment can't be blank"});
    }

    $.ajax({
      url: "/api/v1/comments",
      type: "POST",
      data: { comment: { description: description } },
      success: comment => {
        this.props.handleSubmit(comment);
        this.setState({value: ''});
      }
    });
  }

  render() {
    handleChange = (event) => {
      this.setState({value: event.target.value});  
      this.setState({errors: ''});   
    }
 
    return (
      <div>
        <textarea className = "new_comment"  placeholder = 'Enter new comment here' 
          value={this.state.value} onChange={handleChange}/>
          <span className = {this.state.errors ? "errors" : ""} > {this.state.errors} </span>
        <button className = "submit" onClick={this.handleClick}>Comment</button>
      </div>
    )
  }
}