async function handleSubmit(e) {
  e.preventDefault();

  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    message: e.target.message.value,
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const contentType = res.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    const result = await res.json();
    console.log(result);
  } else {
    const text = await res.text();
    console.error("❌ HTML response:", text);
  }
}