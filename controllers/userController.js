let users = [];
let currentId = 1;

export function healthCheck(req,res){
  res.status(200).json({message:"Server is up and running"})
}

export function getUsers(req, res) {
  res.json(users);
}

export function getUserById(req, res) {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
}

export function createUser(req, res) {
  const { name, email } = req.body;
  const newUser = { id: currentId++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
}

export function updateUser(req, res) {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });

  const { name, email } = req.body;
  user.name = name || user.name;
  user.email = email || user.email;

  res.json(user);
}

export function deleteUser(req, res) {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).json({ error: 'User not found' });

  const deletedUser = users.splice(index, 1);
  res.json(deletedUser[0]);
}
