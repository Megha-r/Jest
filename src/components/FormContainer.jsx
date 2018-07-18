import { connect } from 'react-redux';
import ConnectedForm from './Form';
import { addArticle } from "../ducks/action";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => {
      console.log('article', article)
      dispatch(addArticle(article))
    }
  };
};

export const FormContainer = connect(null, mapDispatchToProps)(ConnectedForm);
