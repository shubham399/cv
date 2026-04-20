import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const API_URL = process.env.API_URL || "https://api.shubhkumar.in";
const internal_secret = process.env.INTERNAL_SECRET_VALUE || "";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fetchAPI(path: string) {
  return fetch(`${API_URL}${path}`, {
    headers: {
      "x-internal-secret": internal_secret
    },
    next: {
      revalidate: 600 // 10 min
    }
  }).then(resp => resp.json());


}
