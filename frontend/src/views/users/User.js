import React from 'react'
import {CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CDataTable, CRow} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import usersData from './UsersData'

const User = ({match}) => {
  const user = usersData.find( user => user.id.toString() === match.params.id)
  const userDetails = user ? Object.entries(user) :
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  // (이메일(변경불가), 비밀번호, 닉네임, 회원그룹, 운영진 권한 부여, 활동정지(기간설정), 단체게시판 권한 목록)
  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            USER ID: {match.params.id}
            <CButton type="submit" size="m" color="primary"><CIcon name="cil-scrubber" /> 권한부여</CButton>
          </CCardHeader>
          <CCardBody>
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <td>id</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>닉네임</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>가입일</td>
                    <td>2020-08-20</td>
                  </tr>
                  <tr>
                    <td>이메일</td>
                    <td>test@test.com</td>
                  </tr>
                  <tr>
                    <td>비밀번호</td>
                    <td>
                      <CButton type="submit" size="m" color="primary"><CIcon name="cil-scrubber" /> 비밀번호 재설정</CButton>
                    </td>
                  </tr>
                  <tr>
                    <td>회원그룹</td>
                    <td>재/휴학생</td>
                  </tr>
                  <tr>
                    <td>성별</td>
                    <td>여</td>
                  </tr>
                  <tr>
                    <td>신고횟수</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>활동정지</td>
                    <td>
                      <CButton type="submit" size="m" color="primary"><CIcon name="cil-scrubber" /> 활동 정지 하기</CButton>
                    </td>
                  </tr>
                </tbody>
              </table>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            단체게시판 권한 목록
          </CCardHeader>
          <CCardBody>
            <table className="table table-hover">
              <tbody>
              <tr>
                <th>게시판 타입</th>
                <th>게시판 명</th>
                <th>권한</th>
                <th>권한부여일</th>
                <th></th>
              </tr>
              <tr>
                <td>사진게시판</td>
                <td>먹쿠먹쿠</td>
                <td>R</td>
                <td>2020-05-22 15:00</td>
                <td>
                  <CButton type="submit" size="m" color="primary"><CIcon name="cil-scrubber" /> 권한 삭제</CButton>
                </td>
              </tr>
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default User
