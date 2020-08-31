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

import recycleBinData from './RecycleBinData'
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
                  <CLabel htmlFor="text-input">제목</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="제목" />
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
              items={recycleBinData}
              fields={[
                '작성자', '작성일', '게시판 위치', '제목', {
                  key: 'show_details',
                  label: '',
                  sorter: false,
                  filter: false
                }
              ]}
              hover
              itemsPerPage={12}
              activePage={page}
              scopedSlots = {{
                'show_details':
                  (item, index)=>{
                    return (
                      <td className="py-2">
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"
                        >
                          {'복구'}
                        </CButton>
                      </td>
                    )
                  },
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

export default Admin
