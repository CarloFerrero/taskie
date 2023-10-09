import React, { createContext, useState, useEffect, useContext } from 'react';

// Creare un Context
const UserContext = createContext(null);

// Provider
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulare una chiamata API asincrona per caricare i dati utente
    const fetchData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulazione di un ritardo
      const userData = { name: 'Carlo', age: 30 }; // Dati fittizi
      setUser(userData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
}

// Componente che utilizza il Context
function Profile() {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{`Nome: ${user.name}, Età: ${user.age}`}</h1>
    </div>
  );
}

// App principale
function App() {
  return (
    <UserProvider>
      <Profile />
    </UserProvider>
  );
}

export default App;
