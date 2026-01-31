const API_URL = "http://localhost:5000";

export const loginApi = async (data) => {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const getOrders = async (token) => {
  const res = await fetch(`${API_URL}/api/store/orders`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.json();
};

export const getSummary = async (token) => {
  const res = await fetch(`${API_URL}/api/store/summary`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.json();
};
