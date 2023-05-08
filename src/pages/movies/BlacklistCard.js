import { Col } from "react-bootstrap";
import Button from '../../components/Button';

export const BlacklistCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4} lg={3}>
 <div className="card mb-3">
 <div className="movies-imgbx">
        <img src={imgUrl} style={{width: '100%'}} />
        <div className="movies-txtx text-dark d-flex">
          <h6>{title}</h6>
          <Button className='movies-btn'>comedy</Button>
        
        </div>
        <div className="d-flex justify-content-between text-center primary-color sign-icons">
            <a href="#">
            <img src="../images/details.png" />
            <p>Details</p>
            </a>
            <a href="#">
            <img src="../images/Vector (4).png" />
            <p>Blacklist</p>
            </a>
            <a href="#">
            <img src="../images/delete.png" />
            <p>Delete</p>
            </a>
          </div>
      </div>
 </div>
    </Col>
  )
}
export default BlacklistCard

