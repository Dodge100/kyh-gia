from flask import Blueprint, abort, jsonify, g, request, current_app as app


from supertokens_python.recipe.session.framework.flask import verify_session
from supertokens_python.recipe.multitenancy.syncio import list_all_tenants
from supertokens_python.recipe.session.framework.flask import verify_session
from supertokens_python.recipe.userroles import UserRoleClaim
from supertokens_python.recipe.userroles.syncio import add_role_to_user
from supertokens_python.recipe.userroles.interfaces import UnknownRoleError
from supertokens_python.recipe.passwordless.syncio import get_user_by_email
from backend.app_extensions import mongo

from bson import ObjectId, json_util

bp = Blueprint("routes", __name__)


@bp.route("/sessioninfo", methods=["GET"])  # type: ignore
@verify_session()
def get_session_info():
    session_ = g.supertokens

    print(session_.get_user_id())
    print(session_.get_handle())
    print(session_.get_access_token_payload())

    return jsonify(
        {
            "sessionHandle": session_.get_handle(),
            "userId": session_.get_user_id(),
            "accessTokenPayload": session_.get_access_token_payload(),
        }
    )


@bp.route("/tenants", methods=["GET"])  # type: ignore
def get_tenants():
    tenantReponse = list_all_tenants()

    tenantsList = []

    for tenant in tenantReponse.tenants:
        tenantsList.append(tenant.to_json())

    return jsonify(
        {
            "status": "OK",
            "tenants": tenantsList,
        }
    )


# This is required since if this is not there, then OPTIONS requests for
# the APIs exposed by the supertokens' Middleware will return a 404
@bp.route("/", defaults={"u_path": ""})
@bp.route("/<path:u_path>")
def catch_all(u_path: str):
    abort(404)


def add_role_to_user_func(user_id: str, role: str):
    role = "user"
    res = add_role_to_user("public", user_id, role)
    if isinstance(res, UnknownRoleError):
        # No such role exists
        return

    if res.did_user_already_have_role:
        # User already had this role
        pass


@bp.route("/auth/add_school", methods=["POST"])
@verify_session(
    # We add the UserRoleClaim's includes validator
    override_global_claim_validators=lambda global_validators, session, user_context: global_validators
    + [UserRoleClaim.validators.includes("admin")]
)
def add_school():
    school_name = request.json.get("school_name")
    school_address = request.json.get("school_address")
    zip_code = request.json.get("zip_code")

    mongo.db.schools.insert_one(
        {
            "school_name": school_name,
            "school_address": school_address,
            "zip_code": zip_code,
        }
    )

    return jsonify({"status": "OK"})


@bp.route("/auth/add_school_admin", methods=["POST"])
@verify_session(
    # We add the UserRoleClaim's includes validator
    override_global_claim_validators=lambda global_validators, session, user_context: global_validators
    + [UserRoleClaim.validators.includes("admin")]
)
def add_school_admin():
    email = request.json.get("email")
    school = request.json.get("school")

    mongo.db.schoolAdmins.insert_one(
        {
            email: email,
            school: school,
        }
    )

    user_info = get_user_by_email("public", email)
    user_id = user_info.user_id

    add_role_to_user_func(user_id, "schoolAdmin")

    print(user_info)

    return jsonify({"status": "OK"})


@bp.route("/auth/add_teacher", methods=["POST"])
@verify_session(
    # We add the UserRoleClaim's includes validator
    override_global_claim_validators=lambda global_validators, session, user_context: global_validators
    + [UserRoleClaim.validators.includes("admin")]
)
def add_teacher():
    email = request.json.get("email")
    room = request.json.get("room")
    school = request.json.get("school")

    user_info = get_user_by_email("public", email)
    user_id = user_info.user_id

    add_role_to_user_func(user_id, "teacher")

    mongo.db.teachers.insert_one(
        {
            "email": email,
            "room": room,
            "school": school,
        }
    )

    print(user_info)

    return jsonify({"status": "OK"})


@bp.route("/auth/add_club", methods=["POST"])
@verify_session(
    # We add the UserRoleClaim's includes validator
    override_global_claim_validators=lambda global_validators, session, user_context: global_validators
    + [UserRoleClaim.validators.includes("admin")]
)
def add_club():
    club_name = request.json.get("club_name")
    school = request.json.get("school")
    room = request.json.get("room")

    mongo.db.clubs.insert_one(
        {
            "club_name": club_name,
            "school": school,
            "room": room,
        }
    )

    return jsonify({"status": "OK"})


@bp.route("/auth/add_club_officer", methods=["POST"])
@verify_session(
    # We add the UserRoleClaim's includes validator
    override_global_claim_validators=lambda global_validators, session, user_context: global_validators
    + [UserRoleClaim.validators.includes("admin")]
)
def add_club_officer():
    email = request.json.get("email")
    club = request.json.get("club")
    school = request.json.get("school")

    user_info = get_user_by_email("public", email)
    user_id = user_info.user_id

    add_role_to_user_func(user_id, "clubOfficer")

    print(user_info)

    mongo.db.clubOfficers.insert_one(
        {
            "email": email,
            "club": club,
            "school": school,
        }
    )

    return jsonify({"status": "OK"})


@bp.route("/api/v1/get-schools")
def get_schools():
    schools = mongo.db.schools.find()

    schoolsList = []

    for school in schools:
        schoolsList.append(school)

    return json_util.dumps(
        {
            "status": "OK",
            "schools": schoolsList,
        }
    )


@bp.route("/api/v1/get-clubs", methods=["POST"])
def get_clubs():
    school = request.json.get("school")

    clubs = mongo.db.clubs.find({ "school": school })

    clubsList = []

    for club in clubs:
        clubsList.append(club)

    return json_util.dumps(
        {
            "status": "OK",
            "clubs": clubsList,
        }
    )
