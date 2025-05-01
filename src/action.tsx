"use server";

const baseUrl = "http://127.0.0.1:8000/";

const getAllProjects = async () => {
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

export default getAllProjects;
