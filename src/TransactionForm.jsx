function TransactionForm() {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Add Transaction</h2>

      <form style={styles.form}>
        
        <label>Type</label>
        <select style={styles.input}>
          <option>Expense</option>
          <option>Income</option>
        </select>

        <label>Category</label>
        <select style={styles.input}>
          <option>Select Category</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Salary</option>
          <option>Entertainment</option>
        </select>

        <label>Amount</label>
        <input
          type="number"
          placeholder="Enter amount"
          style={styles.input}
        />

        <label>Date</label>
        <input
          type="date"
          style={styles.input}
        />

        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          style={styles.input}
        />

        <button style={styles.button}>
          Add Transaction
        </button>

      </form>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    width: "400px",
    margin: "40px auto"
  },

  title: {
    marginBottom: "20px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px"
  },

  button: {
    marginTop: "10px",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#4f46e5",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default TransactionForm;