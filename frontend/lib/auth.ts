import {
  doesEmailExist,
  sendPasswordResetEmail,
  signIn,
  signUp,
} from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import {
  getAuthorisationURLWithQueryParamsAndSetState,
  signInAndUp,
} from "supertokens-auth-react/recipe/thirdparty";
import { UserRoleClaim } from "supertokens-auth-react/recipe/userroles";

import { appInfo } from "@/app/config/appinfo";

export async function signUpClicked(email: string, password: string) {
  try {
    let response = await signUp({
      formFields: [
        {
          id: "email",
          value: email,
        },
        {
          id: "password",
          value: password,
        },
      ],
    });

    if (response.status === "FIELD_ERROR") {
      // one of the input formFields failed validaiton
      response.formFields.forEach((formField) => {
        if (formField.id === "email") {
          // Email validation failed (for example incorrect email syntax),
          // or the email is not unique.
          window.alert(formField.error);
        } else if (formField.id === "password") {
          // Password validation failed.
          // Maybe it didn't match the password strength
          window.alert(formField.error);
        }
      });
    } else if (response.status === "SIGN_UP_NOT_ALLOWED") {
      // the reason string is a user friendly message
      // about what went wrong. It can also contain a support code which users
      // can tell you so you know why their sign up was not allowed.
      window.alert(response.reason);
    } else {
      // sign up successful. The session tokens are automatically handled by
      // the frontend SDK.
      window.location.href = "/";
    }
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      window.alert("Oops! Something went wrong.");
    }
  }
}

export async function checkEmail(email: string) {
  try {
    let response = await doesEmailExist({
      email,
    });

    if (response.doesExist) {
      window.alert("Email already exists. Please sign in instead");
    }
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      window.alert("Oops! Something went wrong.");
    }
  }
}

export async function signInClicked(email: string, password: string) {
  try {
    let response = await signIn({
      formFields: [
        {
          id: "email",
          value: email,
        },
        {
          id: "password",
          value: password,
        },
      ],
    });

    if (response.status === "FIELD_ERROR") {
      response.formFields.forEach((formField) => {
        if (formField.id === "email") {
          // Email validation failed (for example incorrect email syntax).
          window.alert(formField.error);
        }
      });
    } else if (response.status === "WRONG_CREDENTIALS_ERROR") {
      window.alert("Email password combination is incorrect.");
    } else if (response.status === "SIGN_IN_NOT_ALLOWED") {
      // the reason string is a user friendly message
      // about what went wrong. It can also contain a support code which users
      // can tell you so you know why their sign in was not allowed.
      window.alert(response.reason);
    } else {
      // sign in successful. The session tokens are automatically handled by
      // the frontend SDK.
      window.location.href = "/";
    }
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      console.log(err);
      window.alert("Oops! Something went wrong.");
    }
  }
}

export async function googleSignInClicked() {
  try {
    const authUrl = await getAuthorisationURLWithQueryParamsAndSetState({
      thirdPartyId: "google",

      // This is where Google should redirect the user back after login or error.
      // This URL goes on the Google's dashboard as well.
      frontendRedirectURI: `${appInfo.websiteDomain}/auth/callback/google`,
    });

    /*
        Example value of authUrl: https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=offline&include_granted_scopes=true&response_type=code&client_id=1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com&state=5a489996a28cafc83ddff&redirect_uri=https%3A%2F%2Fsupertokens.io%2Fdev%2Foauth%2Fredirect-to-app&flowName=GeneralOAuthFlow
        */

    // we redirect the user to google for auth.
    window.location.assign(authUrl);
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      window.alert("Oops! Something went wrong.");
    }
  }
}

export async function handleGoogleCallback() {
  try {
    const response = await signInAndUp();

    if (response.status === "OK") {
      console.log(response.user);
      if (
        response.createdNewRecipeUser &&
        response.user.loginMethods.length === 1
      ) {
        // sign up successful
      } else {
        // sign in successful
      }
      window.location.assign("/");
    } else if (response.status === "SIGN_IN_UP_NOT_ALLOWED") {
      // the reason string is a user friendly message
      // about what went wrong. It can also contain a support code which users
      // can tell you so you know why their sign in / up was not allowed.
      window.alert(response.reason);
    } else {
      // SuperTokens requires that the third party provider
      // gives an email for the user. If that's not the case, sign up / in
      // will fail.

      // As a hack to solve this, you can override the backend functions to create a fake email for the user.

      window.alert(
        "No email provided by social login. Please use another form of login",
      );
      window.location.assign("/auth/login"); // redirect back to login page
    }
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      console.log(err);
      window.alert("Oops! Something went wrong.");
    }
  }
}

export async function sendEmailClicked(email: string) {
  try {
    let response = await sendPasswordResetEmail({
      formFields: [
        {
          id: "email",
          value: email,
        },
      ],
    });

    if (response.status === "FIELD_ERROR") {
      // one of the input formFields failed validaiton
      response.formFields.forEach((formField) => {
        if (formField.id === "email") {
          // Email validation failed (for example incorrect email syntax).
          window.alert(formField.error);
        }
      });
    } else if (response.status === "PASSWORD_RESET_NOT_ALLOWED") {
      // this can happen due to automatic account linking. Please read our account linking docs
    } else {
      // reset password email sent.
      window.alert("Please check your email for the password reset link");
    }
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      window.alert("Oops! Something went wrong.");
    }
  }
}

export async function doesSessionExist(): Promise<boolean> {
  if (await Session.doesSessionExist()) {
    return true;
  } else {
    return false;
  }
}

export async function fetchUserRoles(): Promise<string[] | null> {
  if (await doesSessionExist()) {
    let roles = await Session.getClaimValue({ claim: UserRoleClaim });

    return roles || [];
  } else {
    return null;
  }
}
