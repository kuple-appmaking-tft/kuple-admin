import React from 'react'
import {CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import reviewData from './ReviewData'

const User = ({match}) => {
  const user = reviewData.find( user => user.id.toString() === match.params.id)
  const userDetails = user ? Object.entries(user) :
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  // '작성자', '작성일', '교수님', '수업명', '별점', '내용'
  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            REVIEW ID: {match.params.id}
          </CCardHeader>
          <CCardBody>
            <table className="table table-hover">
              <tbody>
              {
                userDetails.map(([key, value], index) => {
                  return (
                    <tr key={index.toString()}>
                      <td><strong>{`${key}`}</strong></td>
                      <td>{value}</td>
                    </tr>
                  )
                })
              }
              </tbody>
            </table>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="m" color="primary"><CIcon name="cil-scrubber" /> 히든처리</CButton>
            <CButton type="reset" size="m" color="danger"><CIcon name="cil-ban" /> 삭제</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default User
