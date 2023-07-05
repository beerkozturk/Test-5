import React from "react";
import LeaveRequestForm from "./leaveRequestForm";

function LeaveRequestPage() {
  const handleLeaveRequestSubmit = (formData) => {

    fetch("http://localhost:8850/leave-request", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        startDate: formData.startDate,
        endDate: formData.endDate,
        description: formData.description,
      })
    }).then((res) => res.json()).then((data) => console.log(data))

    console.log("Form data:", formData);
  };

  return (
    <div>
      <h1>İzin Talebi Gönder</h1>
      <LeaveRequestForm onSubmit={handleLeaveRequestSubmit} />
    </div>
  );
}

export default LeaveRequestPage;