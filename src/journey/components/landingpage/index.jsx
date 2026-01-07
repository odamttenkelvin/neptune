import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function NavigationPage() {
  return (
<div className="d-flex justify-content-center align-items-center min-vh-100">
    <Card style={{ width: '50rem' }} className="mx-auto mt-5">
      <Card.Header className="text-center">Welcome</Card.Header>

      <Row xs={1} md={2} className="g-2 p-3">

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>I'm a student or member of staff</Card.Title>
              <Card.Text>
                Use the same username and password as you would for Outlook or Office 365.
              </Card.Text>
              <Button variant="danger">
                log in with my keltech account
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>I'm an affiliate or an external user</Card.Title>
              <Card.Text>
                Once we approve your account, we'll send your username and password to you via email.
              </Card.Text>

              <Button as={Link} to="/login" variant="secondary">
                log in with my affiliate account
              </Button>

            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Card>
</div>
  );
}

export default NavigationPage;
