import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function UpiPayment() {
  const [amount, setAmount] = useState("");
  const [customerUpi, setCustomerUpi] = useState("");
  const [status, setStatus] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const upiID = "changvijay54-1@oksbi";
  const yourName = "mariyaman"; 

  const sendPaymentRequest = () => {
    if (!amount || amount <= 0) {
      alert("Please provide a amount.");
      return;
    }
    setShowQR(true);
    setIsSubmitted(true); 
    setStatus(`Payment request initiated for ₹${amount} to ${customerUpi}.`);
  };

  const getUpiURL = () => {
    return `upi://pay?pa=${upiID}&pn=${yourName}&mc=&tid=&tr=&tn=Payment&am=${amount}&cu=INR&url=`;
  };

  const handleSendToCustomerUpi = () => {
    if (!customerUpi || !amount) {
      alert("Please provide valid details.");
      return;
    }
    const upiLink = `upi://pay?pa=${customerUpi}&pn=Customer&mc=&tid=&tr=&tn=Payment Request&am=${amount}&cu=INR`;
    window.location.href = upiLink;
  };

  return (
<div
  className="justify-items-center"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    backgroundImage: "url('/pudhariaman.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }}
>
  <div
    style={{
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      background: "rgba(255, 255, 255, 0.5)",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderRadius: "10px",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      maxWidth: "600px",
      width: "90%", // Ensure responsiveness
    }}
  >
    <h1>UPI Payment</h1>

    <div>
      <label>
        <strong>Enter Amount:</strong>
      </label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        style={{ margin: "0 10px" }}
        disabled={isSubmitted}
      />
    </div>

    <button
      onClick={sendPaymentRequest}
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        cursor: isSubmitted ? "not-allowed" : "pointer",
        backgroundColor: isSubmitted ? "#ccc" : "#007bff",
        color: isSubmitted ? "#666" : "#fff",
      }}
      disabled={isSubmitted}
    >
      {isSubmitted ? "Request Sent" : "Send Payment Request"}
    </button>

    {showQR && (
      <div className="justify-items-center" style={{ marginTop: "20px" }}>
        <h3>Scan this QR Code to Pay:</h3>
        <QRCodeCanvas value={getUpiURL()} size={200} />
      </div>
    )}

    <div style={{ marginTop: "20px", color: "green" }}>
      {status && <p>{status}</p>}
    </div>

    {isSubmitted && (

      


      <div style={{ marginTop: "20px", color: "#007bff" }}>

<div style={{ marginTop: "10px" }}>
          <label>
            <strong>Customer UPI ID:</strong>
          </label>
          <input
            type="text"
            value={customerUpi}
            onChange={(e) => setCustomerUpi(e.target.value)}
            placeholder="Enter UPI ID"
            style={{ margin: "0 10px" }}
          />
        </div>

        <div className="justify-items-center" style={{ marginTop: "10px" }}>
          <button
            onClick={handleSendToCustomerUpi}
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Send Payment Request
          </button>
        </div>
        <p>
          Please take a screenshot and share it via WhatsApp: 710747878
        </p>
        <div className="justify-items-center">
          <button
            aria-label="Chat on WhatsApp"
            style={{
              backgroundColor: "#25D366",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            onClick={() =>
              window.open(
                "https://wa.me/917010747878",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <img
              alt="Chat on WhatsApp"
              src="https://static-00.iconduck.com/assets.00/whatsapp-icon-2040x2048-8b5th74o.png"
              style={{ width: "30px", height: "auto" }}
            />
            Chat on WhatsApp
          </button>
        </div>

      </div>
    )}
  </div>
</div>

  );
}

export default UpiPayment;
