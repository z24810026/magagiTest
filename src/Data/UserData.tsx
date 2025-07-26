// src/Data/UserData.tsx
export type Role = "admin" | "user";

export type User = {
  userId: string;
  mail: string;
  password: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
};

// 🔹 20件のダミーユーザ
export const users: User[] = [
  {
    userId: "u001",
    mail: "user1@example.com",
    password: "pass1234",
    role: "admin",
    createdAt: "2025-07-01 10:00:00",
    updatedAt: "2025-07-02 12:00:00",
  },
  {
    userId: "u002",
    mail: "user2@example.com",
    password: "pass1234",
    role: "user",
    createdAt: "2025-07-01 11:20:00",
    updatedAt: "2025-07-03 08:00:00",
  },
  {
    userId: "u003",
    mail: "user3@example.com",
    password: "pass1234",
    role: "user",
    createdAt: "2025-07-02 09:00:00",
    updatedAt: "2025-07-03 14:30:00",
  },
  {
    userId: "u004",
    mail: "user4@example.com",
    password: "pass1234",
    role: "admin",
    createdAt: "2025-07-02 15:00:00",
    updatedAt: "2025-07-03 09:00:00",
  },
  {
    userId: "u005",
    mail: "user5@example.com",
    password: "pass1234",
    role: "user",
    createdAt: "2025-07-03 10:00:00",
    updatedAt: "2025-07-04 16:00:00",
  },
  {
    userId: "u006",
    mail: "user6@example.com",
    password: "pass1234",
    role: "user",
    createdAt: "2025-07-03 11:00:00",
    updatedAt: "2025-07-04 10:00:00",
  },
  {
    userId: "u007",
    mail: "user7@example.com",
    password: "pass1234",
    role: "admin",
    createdAt: "2025-07-04 08:00:00",
    updatedAt: "2025-07-05 12:00:00",
  },
  {
    userId: "u008",
    mail: "user8@example.com",
    password: "pass1234",
    role: "user",
    createdAt: "2025-07-04 14:00:00",
    updatedAt: "2025-07-06 09:00:00",
  },
  {
    userId: "u009",
    mail: "user9@example.com",
    password: "pass1234",
    role: "user",
    createdAt: "2025-07-05 10:00:00",
    updatedAt: "2025-07-06 13:00:00",
  },
  {
    userId: "u010",
    mail: "user10@example.com",
    password: "pass1234",
    role: "admin",
    createdAt: "2025-07-05 11:00:00",
    updatedAt: "2025-07-06 17:00:00",
  },
  {
    userId: "u011",
    mail: "user11@example.com",
    password: "pass1234",
    role: "user",
    createdAt: "2025-07-06 10:30:00",
    updatedAt: "2025-07-07 11:45:00",
  },
  {
    userId: "u012",
    mail: "user12@example.com",
    password: "pass1234",
    role: "user",
    createdAt: "2025-07-06 12:00:00",
    updatedAt: "2025-07-07 14:00:00",
  },
  {
    userId: "u013",
    mail: "user13@example.com",
    password: "pass1234",
    role: "admin",
    createdAt: "2025-07-07 09:15:00",
    updatedAt: "2025-07-08 10:00:00",
  },
  {
    userId: "u014",
    mail: "user14@example.com",
    password: "pass1234",
    role: "user",
    createdAt: "2025-07-07 11:00:00",
    updatedAt: "2025-07-08 15:00:00",
  },
  {
    userId: "u015",
    mail: "user15@example.com",
    password: "pass1234",
    role: "user",
    createdAt: "2025-07-08 10:00:00",
    updatedAt: "2025-07-09 12:00:00",
  },
  {
    userId: "u016",
    mail: "user16@example.com",
    password: "pass1234",
    role: "user",
    createdAt: "2025-07-08 13:30:00",
    updatedAt: "2025-07-09 16:00:00",
  },
  {
    userId: "u017",
    mail: "user17@example.com",
    password: "pass1234",
    role: "admin",
    createdAt: "2025-07-09 09:00:00",
    updatedAt: "2025-07-10 10:30:00",
  },
  {
    userId: "u018",
    mail: "user18@example.com",
    password: "pass1234",
    role: "user",
    createdAt: "2025-07-09 11:00:00",
    updatedAt: "2025-07-10 12:00:00",
  },
  {
    userId: "u019",
    mail: "user19@example.com",
    password: "pass1234",
    role: "user",
    createdAt: "2025-07-10 08:00:00",
    updatedAt: "2025-07-11 09:00:00",
  },
  {
    userId: "u020",
    mail: "user20@example.com",
    password: "pass1234",
    role: "user",
    createdAt: "2025-07-10 14:00:00",
    updatedAt: "2025-07-11 17:00:00",
  },
];
