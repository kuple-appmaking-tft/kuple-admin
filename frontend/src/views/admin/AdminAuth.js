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
  CForm, CButton, CCardFooter
} from '@coreui/react'

import adminData from './AdminData'
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
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
            운영진 상세 권한 목록
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">회원명</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="닉네임" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">이메일</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="이메일" />
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
              items={adminData}
              fields={[
                '회원명', '이메일', '쿠플광장', '고민상담', '쑥덕쑥덕', '졸업생게시판', '쿠플툰', '먹쿠먹쿠', '강의평가', '합격수기', '취업광장', '스터디게시판',' 꿀팁게시판', '부동산', '구인구직', '중고거래' ,'분실물신고'
              ]}
              hover
              itemsPerPage={12}
              activePage={page}
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
