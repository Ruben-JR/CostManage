import os
from dotenv import load_dotenv
from keycloak import KeycloakOpenID

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
