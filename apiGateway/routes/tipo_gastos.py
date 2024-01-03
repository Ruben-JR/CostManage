import os
import requests

from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi import APIRouter, Depends, HTTPException, Response

from ..keycloak.keycloak_utils import get_user, check_user_role
from ..schemas.tipo_gastos import tipo_gastosSchema

load_dotenv()
BACKEND_URL = os.getenv("BACKEND_URL")

router = APIRouter(tags=["Tipo gastos"])


@router.post("/tipo_gastos/create-tipo_gastos")
async def create_tipo_gastos(payload: tipo_gastosSchema, user: dict = Depends(get_user)):
    if user is None:
        raise HttpException(status=401, detail="Invalide token or user information not found")

    check_user_role(user, ["admin"])

    headers = {"content-type": "application/json"}
    r = request.post(BACKEND_URL, headers=headers + "/tipo_gastos/create-tipo_gastos", json=payload.dict())
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HttpException(status=404, detail="Intem not created")
    else:
        raise HttpException(status=r.status, detail="server error")


@router.get("/tipo_gastos/get-tipo_gastos")
async def get_tipo_gastos(user: dict = Depends(get_user)):
    if user is None:
        raise HttpException(status=401, detail="Inalide token or user information not found")

    check_user_role(user, ["admin"])

    r.request.get(BACKEND_URL + "/tipo_gastos/get-tipo_gastos")
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HttpException(status=404, detail="Items not found")
    else:
        raise HttpException(status=r.status, detail="server error")


@router.get("/tipo_gastos/get-tipo_gastos-id/{id}")
async def get_tipo_gastos_id(id: int, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    r = requests.get(BACKEND_URL + f"/tipo_gastos/get-tipo_gastos-id/{id}")
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HTTPException(status=404, detail="Item not found")
    else:
        raise HTTPException(status=r.status, detail="Server error")


@router.put("/tipo_gastos/update-tipo_gastos/{id}")
async def update_tipo_gastos(id: int, payload: tipo_gastosSchema, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    headers = {"Content-Type": "application/json"}
    r = requests.put(BACKEND_URL, headers=headers + f"/update-tipo_gastos/{id}", json=payload.dict())
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HTTPException(status=404, detail="Item not found")
    else:
        raise HTTPException(status=r.status, detail="Server error")


@router.delete("/tipo_gastos/delete-tipo_gastos/{id}")
async def delete_tipo_gastos(id: int, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status_code=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    headers = {"Content-Type": "application/json"}
    r = requests.put(BACKEND_URL, headers=headers + f"/delete-tipo_gastos/{id}")
    if r.status_code == 200:
        response = r.json()
        return response
    elif r.status_code == 404:
        raise HTTPException(status_code=404, detail="Item not found")
    else:
        raise HTTPException(status_code=r.status_code, detail="Server error")
