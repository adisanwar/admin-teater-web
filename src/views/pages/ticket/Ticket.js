/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CContainer,
  CRow,
  CCol,
  CButton,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CPagination,
  CPaginationItem
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSearch } from '@coreui/icons';

const Ticket = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const columns = [
    { key: 'id', label: '#', _props: { scope: 'col' } },
    { key: 'tittle',  label: 'Nama Ticket', _props: { scope: 'col' } },
    { key: 'heading_1', label: 'Heading', _props: { scope: 'col' } },
    { key: 'heading_2', label: 'Heading', _props: { scope: 'col' } },
    { key: 'heading_3', label: 'Heading 3', _props: { scope: 'col' } },
    { key: 'aksi', label: 'Aksi', _props: { scope: 'col' } },
  ];

  const items = [
    {
      id: 1,
      class: 'Mark',
      heading_1: 'Otto',
      heading_2: '@mdo',
      heading_3: '@mdo',
    },
    {
      id: 2,
      class: 'Jacob',
      heading_1: 'Thornton',
      heading_2: '@fat',
      heading_3: '@mdo',
    },
    {
      id: 3,
      class: 'Larry the Bird',
      heading_1: '@twitter',
      heading_2: '@fat',
      heading_3: '@mdo',
    },
    {
      id: 1,
      class: 'Mark',
      heading_1: 'Otto',
      heading_2: '@mdo',
      heading_3: '@mdo',
    },
    {
      id: 2,
      class: 'Jacob',
      heading_1: 'Thornton',
      heading_2: '@fat',
      heading_3: '@mdo',
    },
    {
      id: 3,
      class: 'Larry the Bird',
      heading_1: '@twitter',
      heading_2: '@fat',
      heading_3: '@mdo',
    },
    {
      id: 1,
      class: 'Mark',
      heading_1: 'Otto',
      heading_2: '@mdo',
      heading_3: '@mdo',
    },
    {
      id: 2,
      class: 'Jacob',
      heading_1: 'Thornton',
      heading_2: '@fat',
      heading_3: '@mdo',
    },
    {
      id: 3,
      class: 'Larry the Bird',
      heading_1: '@twitter',
      heading_2: '@fat',
      heading_3: '@mdo',
    },
    {
      id: 1,
      class: 'Mark',
      heading_1: 'Otto',
      heading_2: '@mdo',
      heading_3: '@mdo',
    },
    {
      id: 2,
      class: 'Jacob',
      heading_1: 'Thornton',
      heading_2: '@fat',
      heading_3: '@mdo',
    },
    {
      id: 3,
      class: 'Larry the Bird',
      heading_1: '@twitter',
      heading_2: '@fat',
      heading_3: '@mdo',
    },
    // Add more items here if needed
  ];

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (items) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredItems = items.filter(item =>
    item.class.toLowerCase().includes(searchTerm) ||
    item.heading_1.toLowerCase().includes(searchTerm) ||
    item.heading_2.toLowerCase().includes(searchTerm) ||
    item.heading_3.toLowerCase().includes(searchTerm)
  );

  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const displayedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const generateCellProps = (id, additionalProps = {}) => ({
    id: { scope: 'row' },
    ...additionalProps,
  });

  const cellProps = {
    1: generateCellProps(1),
    2: generateCellProps(2),
    3: generateCellProps(3),
  };

  return (
    <CContainer>
      <CRow className="mb-3">
        <CCol>
          <h2>User Ticket</h2>
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CCol md={3}>
          <CInputGroup>
            <CInputGroupText>
              <CIcon icon={cilSearch} />
            </CInputGroupText>
            <CFormInput
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </CInputGroup>
        </CCol>
        <CCol md={2}>
          <CDropdown>
            <CDropdownToggle color="secondary">
              {itemsPerPage}
            </CDropdownToggle>
            <CDropdownMenu>
              {[5, 10, 15, 20].map((num) => (
                <CDropdownItem key={num} onClick={() => handleItemsPerPageChange(num)}>
                  {num}
                </CDropdownItem>
              ))}
            </CDropdownMenu>
          </CDropdown>
        </CCol>
      </CRow>
      <CTable responsive striped hover>
        <CTableHead>
          <CTableRow>
            {columns.map((col) => (
              <CTableHeaderCell key={col.key} {...col._props}>
                {col.label}
              </CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {displayedItems.map((item) => (
            <CTableRow key={item.id}>
              <CTableDataCell {...(cellProps[item.id]?.id || {})}>{item.id}</CTableDataCell>
              <CTableDataCell {...(cellProps[item.id]?.class || {})}>{item.class}</CTableDataCell>
              <CTableDataCell>{item.heading_1}</CTableDataCell>
              <CTableDataCell>{item.heading_2}</CTableDataCell>
              <CTableDataCell>{item.heading_3}</CTableDataCell>
              <CTableDataCell>
                <CButton color="warning" size="sm" onClick={() => handleEdit(item.id)}>Edit</CButton>{' '}
                <CButton color="danger" size="sm" onClick={() => handleDelete(item.id)}>Delete</CButton>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      <CRow className="mt-3">
        <CCol>
          <p>Showing {displayedItems.length} of {totalItems} items</p>
        </CCol>
        <CCol>
          <CPagination className="justify-content-end">
            <CPaginationItem disabled={currentPage === 1} onClick={() => handlePageChange(1)}>
              First
            </CPaginationItem>
            <CPaginationItem disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
              Previous
            </CPaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <CPaginationItem
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </CPaginationItem>
            ))}
            <CPaginationItem disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </CPaginationItem>
            <CPaginationItem disabled={currentPage === totalPages} onClick={() => handlePageChange(totalPages)}>
              Last
            </CPaginationItem>
          </CPagination>
        </CCol>
      </CRow>
    </CContainer>
  );
};

const handleEdit = (id) => {
  // Add your edit logic here
  console.log(`Edit item with id: ${id}`);
};

const handleDelete = (id) => {
  // Add your delete logic here
  console.log(`Delete item with id: ${id}`);
};

export default Ticket;
