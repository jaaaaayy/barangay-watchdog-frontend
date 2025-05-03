"use server";

import { cookies } from "next/headers";
import { FormSchema } from "./app/login/page";

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

export const getAllAuditLogs = async () => {
  const res = await fetch(`${baseUrl}api/audit-logs`, {
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

export const login = async (credentials: FormSchema) => {
  const response = await fetch(`${baseUrl}api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  const cookieStore = await cookies();

  cookieStore.set({
    name: "token",
    value: data.token,
    httpOnly: true,
    expires: new Date(data.tokenExpiration),
    secure: false,
  });

  return data;
};

export const logout = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  const response = await fetch(`${baseUrl}api/auth/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  cookieStore.delete("token");

  return data;
};
