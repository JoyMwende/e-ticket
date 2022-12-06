import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'
import ViewTicket from '../ViewTicket/ViewTicket';
import { retrieveAllTickets } from "../../Redux/Actions/tickets";

 const TicketList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="staff_id" />
        <TextField source="machine_id" />
        <TextField source="station_id" />
        <TextField source="description" />
        <TextField source="status" />
        <EditButton basePath="/ticket" />
        <DeleteButton basePath="/ticket" />
      </Datagrid>
    </List>
  );
}


export default TicketList