export const getAllEmployees = () => {
  return fetch(`http://localhost:8088/employees?_expand=user`).then((res) =>
    res.json()
  );
};

export const getEmployees = () => {
  return fetch(`http://localhost:8088/users?isStaff=true`).then((res) =>
    res.json()
  );
};
