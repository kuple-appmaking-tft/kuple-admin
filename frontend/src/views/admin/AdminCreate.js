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
            운영진 계정 생성
          </CCardHeader>
          <CCardBody>
            <table className="table table-hover">
              <tbody>
                <tr>
                  <td>이름</td>
                  <td>
                    <CInput id="text-input" name="text-input" placeholder="이름" />
                  </td>
                </tr>
                <tr>
                  <td>이메일</td>
                  <td>
                    <CInput id="text-input" name="text-input" placeholder="이메일" />
                  </td>
                </tr>
                <tr>
                  <td>전화번호</td>
                  <td>
                    <CInput id="text-input" name="text-input" placeholder="전화번호" />
                  </td>
                </tr>
                <tr>
                  <td>회원유형</td>
                  <td>
                    <CInput id="text-input" name="text-input" placeholder="회원유형" />
                  </td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
          <CCardFooter>
            <CButton type="reset" size="m" color="danger"><CIcon name="cil-ban" /> 취소</CButton>
            <CButton type="submit" size="m" color="primary"><CIcon name="cil-scrubber" /> 생성</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Admin
