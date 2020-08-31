import React, { useState, useEffect } from 'react'

import {CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import commentData from './CommentData'
import {useLocation} from "react-router-dom";

const User = ({match}) => {
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])


  const user = commentData.find( user => user.id.toString() === match.params.id)
  const userDetails = user ? Object.entries(user) :
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            댓글 ID: {match.params.id}
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
