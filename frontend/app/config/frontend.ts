import { useRouter } from "next/navigation";
import { SuperTokensConfig } from "supertokens-auth-react/lib/build/types";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import EmailVerification from "supertokens-auth-react/recipe/emailverification";
import Session from "supertokens-auth-react/recipe/session";
import ThirdParty, {
  Google,
} from "supertokens-auth-react/recipe/thirdparty";

import { appInfo } from "./appinfo";

const routerInfo: { router?: ReturnType<typeof useRouter>; pathName?: string } =
  {};

export function setRouter(
  router: ReturnType<typeof useRouter>,
  pathName: string,
) {
  routerInfo.router = router;
  routerInfo.pathName = pathName;
}

export const frontendConfig = (): SuperTokensConfig => {
  return {
    appInfo,
    recipeList: [
      Session.init(),
      EmailPassword.init(),
      ThirdParty.init({
        signInAndUpFeature: {
          providers: [Google.init()],
        },
      }),
      EmailVerification.init({ mode: "REQUIRED" }),
    ],
    windowHandler: (orig) => {
      return {
        ...orig,
        location: {
          ...orig.location,
          getPathName: () => routerInfo.pathName!,
          assign: (url) => routerInfo.router!.push(url.toString()),
          setHref: (url) => routerInfo.router!.push(url.toString()),
        },
      };
    },
  };
};
