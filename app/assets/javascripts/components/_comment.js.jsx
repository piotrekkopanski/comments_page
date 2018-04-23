class Comment extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editable: false,
      value: this.props.comment.description
    };
  }

  handleEdit = () => {
    if (this.state.editable) {
      var id = this.props.comment.id;
      var description = this.state.value;
      var comment = {id: id , description: description};
      this.props.handleUpdate(comment);
    }
    this.setState({ editable: !this.state.editable })
  }

  render() {
  	handleChange = (event) => {
      this.setState({value: event.target.value});    
    }
    var description = this.state.editable ? <input type='text' onChange={handleChange} value={this.state.value} />: <h3 className = "description">{this.props.comment.description}</h3>;
      return (
        <div>
          {description}
          <button className = "remove" onClick={this.props.handleDelete} >X</button>
          <button className = "edit" onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
        </div>
      )
  }
}