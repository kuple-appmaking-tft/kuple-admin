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
  CButton,
} from '@coreui/react'

import groupData from './GroupData'

const Admin = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/board/groups?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
    <CRow>
      <CCol xl={10}>
        <CCard>
          <CCardHeader>
            신청 목록
          </CCardHeader>
          <CCardBody>
              <CDataTable
                items={[{'닉네임': '쿠', '이메일': 'test@test.com', 게시판명: '먹자', '내용': '게시판을 만들고 싶다.', 신청일: '2020-03-04'}]}
                fields={[
                  '닉네임', '이메일', '게시판명', '내용', '신청일', {
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
                            {'수락'}
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
            <CCardHeader>
              게시판 목록
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={groupData}
              fields={[
                'title', '관리자', '생성일', '수정일', {
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
                          {'수정'}
                        </CButton>
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"
                        >
                          {'삭제'}
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
