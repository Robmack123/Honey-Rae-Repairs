export const getNonStaffUser = () => {
  return fetch("http://localhost:8088/users?isStaff=false").then((res) =>
    res.json()
  );
};

export const getStaffUser = () => {
  return fetch(`http://localhost:8088/users?isStaff=true`).then((res) =>
    res.json()
  );
};
