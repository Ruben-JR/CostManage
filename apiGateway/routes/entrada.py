import os
import requests

from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi import APIRouter, Depends, HTTPException, Response

from ..keycloak.keycloak_utils import get_user, check_user_role
from ..schemas.entrada import entradaSchema

load_dotenv()
BACKEND_URL = os.getenv("BACKEND_URL")

router = APIRouter(tags=["Entrada"])


@router.post("/entrada/create-entrada")
async def create_entrada(payload: entradaSchema, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status=401, detail="Invalide token or user information not found")

    check_user_role(user, ["admin"])

    headers = {"content-type": "application/json"}
    r = requests.post(BACKEND_URL, headers=headers + "/entrada/create-entrada", json=payload.dict())
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HTTPException(status=404, detail="Intem not created")
    else:
        raise HTTPException(status=r.status, detail="server error")


@router.get("/entrada/get-entrada")
async def get_entrada(user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status=401, detail="Inalide token or user information not found")

    check_user_role(user, ["admin"])

    r.requests.get(BACKEND_URL + "/entrada/get-entrada")
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HTTPException(status=404, detail="Items not found")
    else:
        raise HTTPException(status=r.status, detail="server error")


@router.get("/entrada/get-entrada-id/{id}")
async def get_entrada_id(id: int, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    r = requestss.get(BACKEND_URL + f"/entrada/get-entrada-id/{id}")
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HTTPException(status=404, detail="Item not found")
    else:
        raise HTTPException(status=r.status, detail="Server error")


@router.put("/entrada/update-entrada/{id}")
async def update_entrada(id: int, payload: entradaSchema, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    headers = {"Content-Type": "application/json"}
    r = requestss.put(BACKEND_URL, headers=headers + f"/update-entrada/{id}", json=payload.dict())
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HTTPException(status=404, detail="Item not found")
    else:
        raise HTTPException(status=r.status, detail="Server error")


@router.delete("/entrada/delete-entrada/{id}")
async def delete_entrada(id: int, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status_code=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    headers = {"Content-Type": "application/json"}
    r = requestss.put(BACKEND_URL, headers=headers + f"/delete-entrada/{id}")
    if r.status_code == 200:
        response = r.json()
        return response
    elif r.status_code == 404:
        raise HTTPException(status_code=404, detail="Item not found")
    else:
        raise HTTPException(status_code=r.status_code, detail="Server error")
