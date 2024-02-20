import React from 'react'
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
export default function Pagnaition() {
  return (
    <nav aria-label='...'>
    <MDBPagination size='sm' className='mb-0'>
      <MDBPaginationItem active>
        <MDBPaginationLink tag='span'>
          1<span className='visually-hidden'>(current)</span>
        </MDBPaginationLink>
      </MDBPaginationItem>
      <MDBPaginationItem>
        <MDBPaginationLink href='#'>2</MDBPaginationLink>
      </MDBPaginationItem>
      <MDBPaginationItem>
        <MDBPaginationLink href='#'>3</MDBPaginationLink>
      </MDBPaginationItem>
    </MDBPagination>
  </nav>
  )
}
