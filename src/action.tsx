"use server";

const baseUrl = "http://127.0.0.1:8000/";

export const getAllProjects = async () => {
  const res = await fetch(`${baseUrl}api/projects`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const { message } = await res.json();
    throw new Error(message);
  }

  const data = await res.json();
  return data;
};

export const getAllReports = async () => {
  const res = await fetch(`${baseUrl}api/reports`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const { message } = await res.json();
    throw new Error(message);
  }

  const data = await res.json();
  return data;
};

export const createReport = async (formData: FormData) => {
  const res = await fetch(`${baseUrl}api/reports`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to create report");
  }

  const data = await res.json();

  return data;
};
