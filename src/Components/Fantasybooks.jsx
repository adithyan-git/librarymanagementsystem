import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../Redux/homeSlice';
import { details } from '../Redux/homeSlice';
import { Link } from 'react-router-dom';

const Fantasybooks = () => {

    const allbooks = useSelector((state)=>state.homebooks.allbookdata)
    console.log('allbooksofcategory =',allbooks);

    const dispatch = useDispatch()
    
    const fantasyCategoryBooks = allbooks.filter((book)=>book.Category === 'Fantasy')

    console.log("fantasyCategoryBooks=",fantasyCategoryBooks);
    

  return (
   <Container fluid className='fantasy-container'>
    <Row>
       {fantasyCategoryBooks.map((fantasyCategoryBook)=>(
         <Col sm={6} md={3} lg={2} className='fantasy-col' key={fantasyCategoryBook.id}>
       
        <div className='fantassy-maindiv'>
          <div className='fantasy-imgdiv'>
              <Link to="/details"><img src={fantasyCategoryBook.Image} alt=""  onClick={()=>dispatch(details(fantasyCategoryBook))}/></Link>
          </div>
          <div className='fantasy-content'>
                <h6>{fantasyCategoryBook.Bookname}</h6>
                <p>{fantasyCategoryBook.Description}</p>
                <p>${fantasyCategoryBook.Price}  <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16" onClick={()=>dispatch(addtocart(fantasyCategoryBook))}>
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></span></p>
          </div>

        </div>
 </Col>
       ))}
    </Row>
   </Container>
  )
}

export default Fantasybooks