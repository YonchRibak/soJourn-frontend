import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class EnvService {
  private readonly window: Window & typeof globalThis;
  apiUrl: string;

  constructor() {
    this.window = window;
    this.apiUrl = this.window.__env?.apiUrl || "http://localhost:4000/api";
  }
}
