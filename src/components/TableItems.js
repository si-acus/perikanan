import React from 'react';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';
import { Button, ButtonGroup, InputGroup, FormControl, Card } from 'react-bootstrap';
import AddItem from './AddItem';
import EditItem from './EditItem';
import { deleteItem } from '../actions/ItemActions';


const ActionsRow = ({ row }) => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);

  return (<ButtonGroup variant="primary" aria-label="Basic example">
    <EditItem row={row} show={modalShow}
      onHide={() => setModalShow(false)} />
    <Button size="sm" onClick={() => setModalShow(true)}><span className="material-icons">edit</span></Button>
    <Button variant="danger" size="sm" onClick={() => dispatch(deleteItem(row.uuid))}><span className="material-icons">delete</span></Button>
  </ButtonGroup>);
};

const columns = [
  {
    name: 'Komoditas',
    selector: row => row.komoditas,
    sortable: true,
  },
  {
    name: 'Provinsi',
    selector: row => row.area_provinsi,
    sortable: true,
  },
  {
    name: 'Kota',
    selector: row => row.area_kota,
    sortable: true,
  },
  {
    name: 'Size',
    selector: row => row.size,
    sortable: true,
  },
  {
    name: 'Price',
    selector: row => row.price,
    sortable: true,
  },
  {
    cell: row => (<ActionsRow row={row} />),
    allowOverflow: true,
    button: true,
    width: '85px',
  },
];

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <InputGroup size="sm" className="mb-3">
    <FormControl
      placeholder="Filter By Komoditas"
      aria-label="Filter By Komoditas"
      id="search"
      type="text"
      value={filterText}
      onChange={onFilter}
    />
    <Button variant="outline-secondary" onClick={onClear}>
      <span className="material-icons">clear</span>
    </Button>
  </InputGroup>
);
const ActionsButton = ({ setModalShow }) => (<Button >
  <span className="material-icons" onClick={() => setModalShow(true)}>add</span>
</Button>
);

const indexPage = () => {
  const items = useSelector(state => state.items);
  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  const filteredItems = items.filter(
    item => item.komoditas && item.komoditas.toLowerCase().includes(filterText.toLowerCase()),
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)} onClear={handleClear}
        filterText={filterText} />
    );
  }, [filterText, resetPaginationToggle]);

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Card>
      <Card.Body>
        <AddItem show={modalShow}
          onHide={() => setModalShow(false)} />
        <DataTable
          actions={<ActionsButton setModalShow={setModalShow} />}
          title="Data Perikanan"
          columns={columns}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          persistTableHead
        />
      </Card.Body>
    </Card>
  );
};

export default indexPage;