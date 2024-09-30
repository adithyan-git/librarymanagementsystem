import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addtocart, details } from '../Redux/homeSlice'
import { Col, Container, Row } from 'react-bootstrap'

const Romance = () => {

    const allbooks = useSelector((state)=>state.homebooks.allbookdata)

    const romancebooks = allbooks.filter((book)=>book.Category === 'Romance')

    const dispatch = useDispatch()
  return (
    <Container fluid className='container-main romance-content'>
    <Row>
    {romancebooks.map((romancebook)=>(
        <Col sm={6} md={3} lg={2} key={romancebook.id}>

        <div className='main-div'>
              <div className='image-div'>
                 <Link to='/details'> <img src={romancebook.Image} alt=""  onClick={()=>dispatch(details(romancebook))}/></Link>
              </div>
              <div className='content-div'>
                  <h6>
                      {romancebook.Bookname}
                  </h6>
                  <p>              
                      {romancebook.Description}
                  </p>
                  <p>{romancebook.Price}
                     <span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16" onClick={()=>dispatch(addtocart(romancebook))}>
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                     </span>
                  </p>
              </div>
        </div>
    </Col>
    ))}
    </Row>
  </Container>
  )
}

export default Romance