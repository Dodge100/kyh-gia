import os
from supertokens_python import InputAppInfo, SupertokensConfig
from supertokens_python.recipe import (
    thirdparty,
    emailpassword,
    session,
    dashboard,
    emailverification,
    usermetadata,
    userroles,
)
from supertokens_python.recipe.thirdparty.provider import (
    ProviderInput,
    ProviderConfig,
    ProviderClientConfig,
)

supertokens_config = SupertokensConfig(
    # These are the connection details of the app you created on supertokens.com
    connection_uri=os.getenv("SUPERTOKENS_CONNECTION_URI"),
    api_key=os.getenv("SUPERTOKENS_API_KEY"),
)

app_info = InputAppInfo(
    app_name="CampusConnect",
    api_domain=os.getenv("API_DOMAIN"),
    website_domain=os.getenv("WEBSITE_DOMAIN"),
    api_base_path="/auth",
    website_base_path="/auth",
)

framework = "flask"

recipe_list = [
    session.init(),  # initializes session features
    thirdparty.init(
        sign_in_and_up_feature=thirdparty.SignInAndUpFeature(
            providers=[
                ProviderInput(
                    config=ProviderConfig(
                        third_party_id="google",
                        clients=[
                            ProviderClientConfig(
                                client_id=os.environ.get("GOOGLE_CLIENT_ID"),
                                client_secret=os.environ.get("GOOGLE_CLIENT_SECRET"),
                            ),
                        ],
                    ),
                ),
            ]
        )
    ),
    emailpassword.init(),
    emailverification.init(mode="REQUIRED"),
    dashboard.init(),
    usermetadata.init(),
    userroles.init(),
]
