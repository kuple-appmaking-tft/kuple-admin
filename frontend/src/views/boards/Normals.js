import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton
} from '@coreui/react'

import normalData from './NormalData'
import CIcon from "@coreui/icons-react";

const Admin = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/boards/normals?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
    <CRow>
      <CCol xl={10}>
        <CCard>
          <CCardBody>
            <CButton type="submit" size="m" color="primary"><CIcon name="cil-scrubber" /> 생성</CButton>

            <CDataTable
              items={normalData}
              fields={[
                'title', '생성일', '수정일', {
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
