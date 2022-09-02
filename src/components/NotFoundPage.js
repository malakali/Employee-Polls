import { connect } from "react-redux";
import "../Styles/NotFoundPage.css";
import { Link } from "react-router-dom";



const NotFoundPage = () => {
  return (
    <>
      <div id="error-page">
       
          <h2 className="header" data-testid="404">
             404
          </h2>
          <br/>
          <p data-text="Page not found">   Opps! Page not found</p>
           
          <div className="btns">
            <Link to={"/"}>return to home page</Link>
          </div>
       
      </div>
    </>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(NotFoundPage);
