

const OfflinePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🔌 You're Offline</h1>
      <p style={styles.subtitle}>Check your internet connection and try again.</p>
      
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#fffbe6",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#cc0000",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "30px",
  },
  image: {
    width: "200px",
    opacity: 0.8,
  },
};

export default OfflinePage;
