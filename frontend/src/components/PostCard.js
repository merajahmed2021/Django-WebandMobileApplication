import React from "react";
import { Card ,Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

function PostCard(props) {
  return (
    <div>
      <Card style={{padding:0,margin:0,borderRadius:'10px',overflow:'hidden',boxShadow:'5px 0 15px rgb(0 0 0 / 2',outline:'none',border:'none'}}>
        <Card.Img variant="top" src={props.img} style={{ height: 200 }} />
        <Card.Body style={{background:'#2c303a',color:'#c7c9d3'}}>
          <Card.Title style={{ width: "max-content" }}>
            {props.title}
          </Card.Title>
          <div style={{ height:50, overflow: "hidden" }}>
            <Card.Text>fkjv xclkcv clkjbd cvlskdd vxlckvnx vxckvjdkv sdb xclvkjbsv zxclvkjv zlxckvjbz v {props.content}</Card.Text>
          </div>
        </Card.Body>
        <Card.Footer style={{background:'#2c303a',color:'#c7c9d3'}}>
          <small className="text-muted">Last updated 3 mins ago</small>
          <Link to={`/details/${props.id}`}>
          <Button className="btn " 
          style={{float:'right',background:'#444857',color:'#c7c9d3',outline:'none',borderRadius:20,paddingTop:5,paddingBottom:5}}
          //  onClick={()=>console.log(props.id)}
          >View more</Button>
                            </Link>
        </Card.Footer>
      </Card>
    </div>
  );
}
export default PostCard;
