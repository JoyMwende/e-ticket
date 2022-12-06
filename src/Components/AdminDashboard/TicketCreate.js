import React from 'react'
import {Create, SimpleForm, TextInput, SelectInput} from "react-admin"

const TicketCreate = (props) => {
  return (
    <Create title="Create a Ticket" {...props}>
      <SimpleForm>
        <TextInput source="staff_id" />
        <TextInput source="machine_id" />
        <TextInput source="station_id" />
        <TextInput multiline source="description" />
        <SelectInput
          source="status"
          choices={[
            { id: "filed", name: "Filed" },
            { id: "pending", name: "Pending..." },
            { id: "in progress", name: "In progress" },
            { id: "repaired", name: "Repaired" },
          ]}
        />
      </SimpleForm>
    </Create>
  );
}

export default TicketCreate