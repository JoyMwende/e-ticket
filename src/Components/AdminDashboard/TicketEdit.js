import React from "react";
import { Edit, SimpleForm, TextInput, SelectInput } from "react-admin";

const TicketEdit = (props) => {
  return (
    <Edit title="Create a Ticket" {...props}>
      <SimpleForm>
        <TextInput disabled source="staff_id" />
        <TextInput source="machine_id" />
        <TextInput source="station_id" />
        <TextInput multiline source="description" />
        <SelectInput
          source="status"
          choices={[
            { id: "filed", name: "filed" },
            { id: "pending", name: "pending..." },
            { id: "in progress", name: "in progress" },
            { id: "repaired", name: "repaired" },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};

export default TicketEdit;
