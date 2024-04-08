import { create } from "zustand";

type StoreState = {
  token: string | null;
  setToken: (token: string) => void;
};

const useStore = create<StoreState>((set) => ({
  token: localStorage.getItem("token"),

  setToken: (data) => {
    try {
      localStorage.setItem("token", data);
    //   let token = localStorage.getItem("token");
      set({ token: data });
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  },
}));

export default useStore;
