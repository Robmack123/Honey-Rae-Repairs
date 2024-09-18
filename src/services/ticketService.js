export const getAllTickets = () => {
  const data = fetch(
    "http://localhost:8088/serviceTickets?_embed=employeeTickets"
  );
  const output = data.then((res) => res.json());
  return output;
};

export const assignTicket = (employeeTicket) => {
  return fetch(`http://localhost:8088/employeeTickets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employeeTicket),
  });
};

export const updateTicket = (ticket) => {
  return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });
};

export const deleteTicket = (ticketId) => {
  return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
    method: "DELETE",
  });
};
