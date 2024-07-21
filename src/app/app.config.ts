import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { importProvidersFrom } from "@angular/core";
import { HttpInterceptorModule } from "../http-interceptor.module";
import { AnimationModule } from "../animation.module";
import { provideToastr, ToastrModule } from "ngx-toastr";
import { environment } from "../environments/environment";

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideToastr(),
    importProvidersFrom(
      HttpInterceptorModule,
      AnimationModule,
      ToastrModule.forRoot()
    ),
  ],

  registerUrl: `${environment.apiUrl}/register`,

  vacationsUrl(
    page: number = 1,
    sortBy: string = "startDate",
    filterBy: string = "noFilter",
    searchValue?: string
  ): string {
    if (!searchValue)
      return `${environment.apiUrl}/vacations/${sortBy}/${filterBy}?page=${page}&limit=9`;
    return `${environment.apiUrl}/vacations/${sortBy}/${filterBy}/${searchValue}?page=${page}&limit=9`;
  },

  vacationUrlStatic: `${environment.apiUrl}/vacations/`,
  loginUrl: `${environment.apiUrl}/login/`,
  usersUrl: `${environment.apiUrl}/users/`,
};
