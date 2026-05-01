async function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;

  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone?.value || "",
    message: form.message.value,
  };

  try {
    const res = await fetch("/api/RESEND", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const contentType = res.headers.get("content-type");

    // ✅ If JSON response
    if (contentType && contentType.includes("application/json")) {
      const result = await res.json();

      if (res.ok) {
        console.log("✅ Success:", result);

        // reset form
        form.reset();

        // optional UI message
        alert("Message sent successfully 🚀");
      } else {
        console.error("❌ API Error:", result);
        alert(result.error || "Something went wrong");
      }
    } 
    // ❌ If HTML response (means API is broken)
    else {
      const text = await res.text();
      console.error("❌ HTML response (API ERROR):", text);

      alert("Server error. Check API route.");
    }
  } catch (err) {
    console.error("❌ Network error:", err);
    alert("Network error. Please try again.");
  }
}