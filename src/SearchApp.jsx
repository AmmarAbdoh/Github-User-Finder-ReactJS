import UsersList from "./UsersList";
import { useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Search } from "react-bootstrap-icons";
import "./index.css";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const handleButtonClick = async () => {
    if (username.length > 0) {
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=${username}`
        );
        const usersData = await response.json();
        if (usersData.total_count > 0) {
          setUsers(usersData.items);
        } else {
          alert("No users were found");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("The Search Bar is Empty");
    }
  };

  return (
    <>
      <Container fluid>
        <Row
          style={{ width: "100%" }}
          className="d-flex justify-content-center"
        >
          <Col sm={12} className="d-flex justify-content-center">
            <h1 style={{ color: "white" }}>Github User Finder</h1>
          </Col>
          <Col sm={12} className="d-flex justify-content-center">
            <img src="/src/assets/icon.png" className="icon" alt="icon" />
          </Col>
          <Col md={6} sm={12}>
            <InputGroup className="mb-3 mt-3">
              <FormControl
                placeholder="Search for github user.."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Button
                id="button-addon2"
                className="Search-bar-button"
                onClick={handleButtonClick}
              >
                <Search />
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>

      <UsersList users={users} />
    </>
  );
};

export default SearchBar;
