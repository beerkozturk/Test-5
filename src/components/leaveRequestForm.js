import React, { useState, useEffect } from "react";

function LeaveRequestForm({ onSubmit }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ startDate, endDate, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Başlangıç Tarihi:
        <input
          type="date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
          required
        />
      </label>
      <label>
        Bitiş Tarihi:
        <input
          type="date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
          required
        />
      </label>
      <label>
        Açıklama:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </label>
      <button type="submit">İzin Talebi Gönder</button>
    </form>
  );
}

export default LeaveRequestForm;