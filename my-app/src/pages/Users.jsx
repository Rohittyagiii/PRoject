function Users({ users }) {
  return (
    <div>
      <h1>All Users</h1>

      {users.length === 0 ? (
        <p>No users added</p>
      ) : (
        users.map((user, index) => (
          <div key={index}>
            <p>Name: {user.firstname} {user.lastname}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Address:{user.address}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Users;