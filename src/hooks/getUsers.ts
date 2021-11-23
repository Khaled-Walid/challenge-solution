import { useEffect, useState } from "react";
import users from "../data/users.json";
import userInterests from "../data/interests.json";

export type User = {
  id: number;
  name: string;
  following: number[];
  interests?: number[];
};

export type Interest = {
  id: number;
  name: string;
};

type Res =
  | {
      data: User[];
      interests: Interest[];
      loading: false;
    }
  | {
      data: null;
      interests: null;
      loading: true;
    };

export const useUsers = (): Res => {
  const [data, setData] = useState<User[] | null>(null);
  const [interests, setInterests] = useState<Interest[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(users as unknown as User[]);
      setInterests(userInterests as unknown as Interest[]);
    }, 2000);
  }, []);

  if (!data || !interests) return { data: null, interests: null, loading: true };
  else return { data, interests, loading: false };
};
