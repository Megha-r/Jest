import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from 'reactstrap';

const mapStateToProps = state => {
  console.log('State::::::::::::', state)

  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  
  <ul className="list-group list-group-flush">
    {articles.map(el => (
            <ListGroup>
            <ListGroupItem className="list-group-item list-group-item-info" key={el.id}>
        {el.title}
        </ListGroupItem>
        </ListGroup>

    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

ConnectedList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default List;
