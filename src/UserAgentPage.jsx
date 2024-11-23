import React, { useEffect, useState } from 'react';

// Exemple de fonction pour récupérer les données (peut être modifiée pour utiliser une API)
const fetchUsersAndAgents = async () => {
  // Remplacez cette partie par l'appel à votre API ou les données statiques
  return {
    users: [
      { id: 1, name: 'User 1', email: 'user1@example.com' },
      { id: 2, name: 'User 2', email: 'user2@example.com' },
    ],
    agents: [
      { id: 1, name: 'Agent 1', role: 'Commercial', contact: 'contact@agent1.com' },
      { id: 2, name: 'Agent 2', role: 'Manager', contact: 'contact@agent2.com' },
    ],
  };
};

const UserAgentPage = () => {
  const [users, setUsers] = useState([]);
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const { users, agents } = await fetchUsersAndAgents();
      setUsers(users);
      setAgents(agents);
    };
    loadData();
  }, []);

  return (
    <div>
      <h1>Utilisateurs et Agents</h1>

      <h2>Utilisateurs</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Agents</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Rôle</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {agents.map(agent => (
            <tr key={agent.id}>
              <td>{agent.id}</td>
              <td>{agent.name}</td>
              <td>{agent.role}</td>
              <td>{agent.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserAgentPage;
