import CommonCard from "../components/common/Card";

import { Link } from "react-router-dom";

function AboutPage(props) {
  return (
    <CommonCard>
      <div>
        <h1>About This Project</h1>
        <p>
          This is a react app to leave feedback for a product or service.
          <p>Version: 1.0.0</p>
          <Link to="/">Go Home</Link>
        </p>
      </div>
    </CommonCard>
  );
}

export default AboutPage;
