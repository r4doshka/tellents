import { connect } from "react-redux";
import Landing from "../routes/Landing";

import { authUser } from "../redux/actions/auth-user-actions";
import { registrationUser } from "../redux/actions/registration-user-action";

const mapStateToProps = state => ({
  isGlobalError: state.getIn(["errors", "isGlobalError"]),
  globalError: state.getIn(["errors", "globalError"])
});

const mapDispatchToProps = {
  authUser,
  registrationUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
