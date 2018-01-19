import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchRepos} from '../actions';

class Github extends React.Component {
  state= {
    term: ''
  }
  renderData = (data) => {
    return data.map(item => <li key={item.id}><a href={item.html_url}>{item.name}</a></li>)
  }
  handleInputChange = (event) => {

    this.setState({term: event.target.value})
  }
  onFormSubmit=(event) => {
    event.preventDefault();
    this.props.fetchRepos(this.state.term);
    this.setState({term: ''});
  }
  render() {
    return (
      <div>
        <form onSubmit= {this.onFormSubmit}>
          <input value={this.state.term} onChange={this.handleInputChange}/>
          <button type="submit">Search</button>
        </form>
        <div>
        {this.renderData(this.props.repos)}
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {repos: state.repos}
}

export default connect(mapStateToProps, {fetchRepos})(Github)