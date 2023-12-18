import json

from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from keycloak.keycloak_schemas import loginSchema, registerSchema, userUpdateSchema, changePasswordSchema
from keycloak.keycloak_utils import keycloak_connection
from keycloak.exceptions import KeycloakPostError, KeycloakError

router = APIRouter(tags=["Keycloak authentication"])
security = HTTPBearer()

@router.post("/login")
async def login(payload: loginSchema):
    try:
        token = keycloak_connection.keycloak_openid.token(payload.userName, payload.password)
    except KeycloakError as error:
        raise HTTPException(status=error.response_code, detail=error.response_body.__str__())

    access_token = token['access_token']
    try:
        userinfo = keycloak_connection.keycloak_openid.userinfo(token=access_token)
    except Exception as err:
        print(err.__str__())
        raise HTTPException(status_code=401, detail="Invalid token")

    return {'token': token}


@router.post("/register")
async def register(payload: registerSchema):
    try:
        keycloak_user_id = keycloak_admin.create_user(
            {
                "username": payload.userName,
                "email": payload.email,
                "enabled": True,
                "firstName": payload.firstName,
                "lastName": payload.lastName,
                "emailVerified": True,
                "attributes": {
                    "phone": payload.phone,
                }
            },
            exist_ok=False
        )

        keycloak_admin.set_user_password(keycloak_user_id, payload.password, False)

    except KeycloakError as err:
        raise HTTPException(status_code=err.response_code, detail=err.response_body.__str__())

    return {'user_id': keycloak_user_id}


@router.post("/logout")
async def logout(request: Request):
    token = request.headers.get('Authorization')
    if token is not None:
        try:
            token = token.split()[1]
            keycloak_connection.keycloak_openid.logout(token)
            return {"message": "successful logout"}
        except KeycloakPostError as err:
            raise HTTPException(status_code=err.response_code, detail="Invalid refresh token")
        except Exception as err:
            raise HTTPException(status_code=400, detail=err.__str__())
    else:
        raise HTTPException(status_code=401, detail="Not authenticated")


@router.patch("/change-password")
async def update_password(change_password_payload: changePasswordSchema, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status_code=401, detail="Invalid token or user information not found")

    user_keycloak_id = user.get('sub')
    user_email = user.get('email')

    try:
        token = keycloak_connection.keycloak_openid.token(user_email, change_password_payload.old_password)
    except KeycloakError as err:
        error_response_body = json.loads(err.response_body.decode('utf-8'))
        raise HTTPException(status_code=err.response_code, detail=error_response_body.get('error_description'))

    if token:
        try:
            keycloak_admin.set_user_password(user_id=user_keycloak_id, password=change_password_payload.new_password,
                                             temporary=False)
        except KeycloakError as err:
            error_response_body = json.loads(err.response_body.decode('utf-8'))
            raise HTTPException(status_code=err.response_code, detail=error_response_body.get('error_description'))

        return {'message': 'Password successfully updated for user {}'.format(user_keycloak_id)}
    else:
        return {'message': 'Fail to update password, old password invalid'}
