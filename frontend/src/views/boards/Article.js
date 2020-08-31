import React, { useState, useEffect } from 'react'

import {CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CDataTable, CPagination, CRow} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import articleData from './ArticleData'
import commentData from './CommentData'
import {useHistory, useLocation} from "react-router-dom";

const User = ({match}) => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/admin?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])


  const user = articleData.find( user => user.id.toString() === match.params.id)
  const userDetails = user ? Object.entries(user) :
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            게시물ID: {match.params.id}
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
          <CCardHeader>
            댓글
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={commentData}
              fields={[
                '작성자', '작성일', '게시판 위치', '게시물ID', '좋아요수', '내용'
              ]}
              hover
              itemsPerPage={12}
              activePage={page}
              clickableRows
              onRowClick={(item) => history.push(`/boards/articles/${item.게시물ID}`)}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={10}
              doubleArrows={false}
              align="center"
            />
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
