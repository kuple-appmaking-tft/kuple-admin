import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
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
        </CCard>
        <CCard>
          <CCardHeader>
            단체게시판 권한 목록
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
        </CCard>
      </CCol>
    </CRow>
  )
}

export default User
