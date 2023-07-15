import User from "./user";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const UsersList = ({ users }) => {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          {users.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <Col
                key={id}
                sm={12}
                md={6}
                lg={4}
                className="d-flex justify-content-center align-items-center"
              >
                <User
                  login={login}
                  avatar_url={avatar_url}
                  html_url={html_url}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default UsersList;
