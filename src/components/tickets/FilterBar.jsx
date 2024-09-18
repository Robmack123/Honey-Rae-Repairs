export const FilterBar = ({
  setShowEmergencyOnly,
  setSearchTerm,
  currentUser,
  setShowOpenTickets,
}) => {
  return (
    <div className="filter-bar">
      {currentUser.isStaff ? (
        <>
          {" "}
          {/* Emergency Button */}
          <button
            className="filter-btn btn-primary"
            onClick={() => {
              setShowEmergencyOnly(true);
            }}
          >
            Emergency
          </button>
          {/* Show all button */}
          <button
            className="filter-btn btn-info"
            onClick={() => {
              setShowEmergencyOnly(false);
            }}
          >
            Show All
          </button>
          {/* Set all button */}
          <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            type="text"
            placeholder="Search Tickets"
            className="ticket-search"
          />
        </>
      ) : (
        <>
          <button
            className="filter-btn btn-info"
            onClick={() => {
              setShowOpenTickets(true);
            }}
          >
            Open Tickets
          </button>
          <button
            className="filter-btn btn-secondary"
            onClick={() => {
              setShowOpenTickets(false);
            }}
          >
            All My Tickets
          </button>
          <button className="filter-btn btn-primary">Create Ticket</button>
        </>
      )}
    </div>
  );
};
