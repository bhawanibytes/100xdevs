interface Users {
  id: string;
  name: string;
}

type usx = Record<string, Users>

const users: usx = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "Jane Doe" },
};

console.log(users['abc123'])

// Initialize an empty Map
const usersMap = new Map <string, Users> ()

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123'))