import { useEffect, useState } from "react";
import users from "../data/users.json";

export type User = {
  id: string;
  name: string;
  followings: number[];
  interests: number[];
};

type Res =
  | {
      data: User[];
      loading: false;
    }
  | {
      data: null;
      loading: true;
    };

export const useUsers = (): Res => {
  const [data, setData] = useState<User[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(users as unknown as User[]);
    }, 2000);
  }, []);

  if (!data) return { data, loading: true };
  else return { data, loading: false };
};
