import React, { Component } from 'react'
import { connect } from 'react-redux';
import findPost from '../redux/actions/findPost'



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          search:"funny"
        };
    }

    handlerOnChange=(e)=>{
        e.preventDefault();
        const search = e.target.value;
        this.setState({
            search
        });
        if (search.length>3) {
            this.props.findPost(search);
        }
    }


    render() {
        return (
                <input type="search" name="search" placeholder="funny" value={this.state.search} onChange={this.handlerOnChange}/>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = dispatch => {
    return {
        findPost: (text) => dispatch(findPost(text))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);

