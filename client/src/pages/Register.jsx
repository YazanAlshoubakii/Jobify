import { Link } from 'react-router-dom';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              defaultValue="yazan"
              required
            />
          </label>
          <button type="submit" className="btn btn-block">
            Submit
          </button>
          <p>
            Already a member?
            <Link to="/login" className="member-btn">
              Login
            </Link>
          </p>
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;
