import React, { Component } from 'react'
import { connect } from 'react-redux';
import findPost from '../redux/actions/findPost';
import notFound from '../img/alert.png';



 class Publication extends Component {
	componentDidMount(){
		this.props.findPost("funny");
	}	

	regexURL=(text)=>{
		const url = /^(ftp|http|https):\/\/[^ "]+$/;
		return url.test(text);
	}

	handlerOnClick = (publication) => {
		console.log("onclick: ", publication);
	}

    render() {
		const {postList} = this.props;
        return (
           <section className="main area">			   
			{postList.length>0?postList.map((publication,i)=>			 
			<article key={i} onClick={this.handlerOnClick.bind(this,publication)}>	
				<div className="img-container">
					< img src = {
						publication.thumbnail && this.regexURL(publication.thumbnail) ? publication.thumbnail : notFound
					}
					className = "img-rounded" / >
					<div className="text-container">
						<h3>{publication.author}</h3>
						<p>{publication.title}</p>
						<div className="icons-container">
							<div className="icons">
								<i className="material-icons dp48">comment</i>
								<span>{publication.num_comments + " Comments"}</span>
							</div>
							<div className="icons">
								<i className="material-icons dp48">favorite_border</i>
								<span>{publication.ups + " Ups"}</span>
							</div>
							<div className="icons">
								<i className="material-icons dp48">arrow_downward</i>
								<span>{publication.ups + " Downs"}</span>
							</div>
						</div>					
					</div>
				</div>
			</article>
		):<article className="noContent">
			<p>No Content to show</p>
		  </article>}
		</section>
        )
    }
}

const mapStateToProps = (state) => {	
	return {
		postList: state.postList
	}
}

 const mapDispatchToProps = dispatch => {
	return{
		findPost: (text) => dispatch(findPost(text))
	}
} 
// export default connect(mapStateToProps)(Publication);
export default connect(mapStateToProps, mapDispatchToProps)(Publication);
