import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
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
  CInputRadio,
  CForm, CButton, CCardFooter
} from '@coreui/react'

import usersData from './UsersData'
import CIcon from "@coreui/icons-react";

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const Users = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
    <CRow>
      <CCol xl={10}>
        <CCard>
          <CCardHeader>
            사용자 상세보기
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">닉네임</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="닉네임" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">가입일</CLabel>
                </CCol>
                <CCol xs="12" md="4">
                  <CInput type="date" id="date-input" name="date-input" placeholder="가입일 (시작)" /> ~
                  <CInput type="date" id="date-input" name="date-input" placeholder="가입일 (끝)" />
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
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="select">회원그룹</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSelect custom name="select" id="select">
                    <option value="0">회원그룹을 선택해주세요.</option>
                    <option value="1">재/휴학생</option>
                    <option value="2">졸업생</option>
                    <option value="3">외부인</option>
                    <option value="3">성별</option>
                    <option value="3">운영진</option>
                    <option value="3">슈퍼어드민</option>
                  </CSelect>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>성별</CLabel>
                </CCol>
                <CCol md="9">
                  <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-radio1">남</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-radio2">여</CLabel>
                  </CFormGroup>
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
            items={usersData}
            fields={[
              '닉네임', '가입일', '이메일', '회원그룹', '성별', '신고횟수', '상세'
            ]}
            hover
            itemsPerPage={12}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/users/${item.id}`)}
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {item.status}
                    </CBadge>
                  </td>
                )
            }}
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

export default Users
