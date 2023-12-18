import os
from dotenv import load_dotenv
from keycloak import KeycloakOpenID
from fastapi import HTTPException

load_dotenv()


keycloak_connection = KeycloakOpenID(
    server_url=os.getenv("SERVER_URL"),
    username=os.getenv("USERNAME"),
    password=os.getenv("PASSWORD"),
    realm_name=os.getenv("REAL_NAME"),
    client_id=os.getenv("USERNAME"),
    client_secret_key=os.getenv("CLIENT_SERCRET")
)

keycloak_admin = KeycloakAdmin(connection=keycloak_connection)
access_token = keycloak_admin.token['access_token']


def check_user_role(user: dict, allowed_roles: list[str]):
    roles = user.get("resource_access").get(CLIENT_ID).get('roles')
    if roles is None or len(roles) == 0:
        raise HTTPException(status_code=401, detail="User roles not found")

    for user_role in roles:
        if user_role in allowed_roles:
            return True

    raise HTTPException(status_code=401, detail="You don't have the required roles authorized")

def get_client_id():
    headers = {
        'Authorization': f'Bearer {access_token}'
    }
    response = requests.get(f'{SERVER_URL}admin/realms/{REALM_NAME}/clients', headers=headers)

    if response.status_code == 200:
        clients = response.json()
        for client in clients:
            if client['clientId'] == CLIENT_ID:
                return client['id']
    else:
        raise Exception(f'GET /admin/realms/{REALM_NAME}/clients/ failed: {response.content}')


def get_client_role_by_name(client_id: str, role: str):
    headers = {
        'Authorization': f'Bearer {access_token}'
    }

    response = requests.get(f'{SERVER_URL}admin/realms/{REALM_NAME}/clients/{client_id}/roles/{role}',
                            headers=headers)

    if response.status_code == 200:
        return response.json()
    elif response.status_code == 404:
        return None
    else:
        raise Exception(
            f'{SERVER_URL}admin/realms/{REALM_NAME}/clients/{client_id}/roles/{role} failed: {response.content}')
