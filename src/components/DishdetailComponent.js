import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';


class DishDetail extends Component {

  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      return(
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  renderComments(comments) {
    if (comments != null) {
      const comments = this.props.dish.comments.map((comment) => {
        return(
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, {comment.date}</p>
          </li>
        )
      });
      return(
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments}
          </ul>
        </div>
      )
      // comments = [<>, <>, <>]
    }
    else {
      return (
        <div></div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          { this.renderDish(this.props.dish) }
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    );
  }

} //Dishdetail

export default DishDetail;