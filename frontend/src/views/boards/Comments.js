import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
  CForm, CButton, CCardFooter
} from '@coreui/react'

import commentData from './CommentData'
import CIcon from "@coreui/icons-react";

const Admin = () => {
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

  return (
    <CRow>
      <CCol xl={10}>
        <CCard>
          <CCardHeader>
            조회
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">작성자</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="닉네임" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">작성일</CLabel>
                </CCol>
                <CCol xs="12" md="4">
                  <CInput type="date" id="date-input" name="date-input" placeholder="가입일 (시작)" /> ~
                  <CInput type="date" id="date-input" name="date-input" placeholder="가입일 (끝)" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">게시물ID</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="게시물ID" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="select">게시판</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSelect custom name="select" id="select">
                    <option value="0">게시판을 선택해주세요.</option>
                    <option value="1">쿠플광장</option>
                    <option value="2">고민상담</option>
                    <option value="3">취업광장</option>
                    <option value="3">부동산</option>
                    <option value="3">강의평가</option>
                  </CSelect>
                </CCol>
              </CFormGroup>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="m" color="primary"><CIcon name="cil-scrubber" /> 조회</CButton>
            <CButton type="reset" size="m" color="danger"><CIcon name="cil-ban" /> 새로고침</CButton>
          </CCardFooter>
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
              onRowClick={(item) => history.push(`/boards/comments/${item.id}`)}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={10}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Admin
