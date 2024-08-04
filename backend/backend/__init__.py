from flask import Flask
from flask_cors import CORS
from supertokens_python import get_all_cors_headers, init
from supertokens_python.framework.flask import Middleware
import backend.config as config
from backend.routes import bp
from backend.app_extensions import mongo
import os


init(
    supertokens_config=config.supertokens_config,
    app_info=config.app_info,
    framework=config.framework,
    recipe_list=config.recipe_list,
)


def create_app():
    global app

    app = Flask(__name__)

    app.config["MONGO_URI"] = os.environ.get("MONGO_URI")

    mongo.init_app(app)

    Middleware(app)
    CORS(
        app=app,
        origins=["http://localhost:3000"],
        supports_credentials=True,
        allow_headers=["Content-Type"] + get_all_cors_headers(),
    )

    app.register_blueprint(bp)

    return app
