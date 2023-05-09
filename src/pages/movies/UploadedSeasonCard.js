import { Col } from "react-bootstrap";
import Button from '../../components/Button';

export const UploadedSeasonCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4} lg={4}>
 <div className="card mb-3">
 <div className="movies-imgbx">
        <img src={imgUrl} style={{width: '100%'}} />
        <div className="season-text text-dark d-flex">
          <h6>{title}</h6>
          <Button className='season-btn'>1H 20MIN</Button>
        
        </div>
        <div className="d-flex text-center primary-color sign-icons">
            <a href="#" >
            <img src="../images/details.png" />
            <p>Details</p>
            </a>
            <a href="#" className="mx-4">
            <img src="../images/delete.png" />
            <p>Delete</p>
            </a>
          </div>
      </div>
 </div>
    </Col>
  )
}
export default UploadedSeasonCard