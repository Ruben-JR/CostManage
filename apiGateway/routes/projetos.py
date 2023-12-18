import os
import requests

from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi import APIRouter, Depends, HTTPException, Response

from ..keycloak.keycloak_utils import get_user, check_user_role
from ..schemas.projetos import projetosSchema

load_dotenv()
BACKEND_URL = os.getenv("BACKEND_URL")

router = APIRouter(tags=["Projetos"])


@router.post("/projetos/create-projetos")
async def create_projetos(payload: projetosSchema, user: dict = Depends(get_user)):
    if user is None:
        raise HttpException(status=401, detail="Invalide token or user information not found")

    check_user_role(user, ["admin"])

    headers = {"content-type": "application/json"}
    r = request.post(BACKEND_URL, headers=headers + "/projetos/create-projetos", json=payload.dict())
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HttpException(status=404, detail="Intem not created")
    else:
        raise HttpException(status=r.status, detail="server error")


@router.get("/projetos/get-projetos")
async def get_projetos(user: dict = Depends(get_user)):
    if user is None:
        raise HttpException(status=401, detail="Inalide token or user information not found")

    check_user_role(user, ["admin"])

    r.request.get(BACKEND_URL + "/projetos/get-projetos")
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HttpException(status=404, detail="Items not found")
    else:
        raise HttpException(status=r.status, detail="server error")


@router.get("/projetos/get-projetos-id/{id}")
async def get_projetos_id(id: int, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    r = requests.get(BACKEND_URL + f"/projetos/get-projetos-id/{id}")
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HTTPException(status=404, detail="Item not found")
    else:
        raise HTTPException(status=r.status, detail="Server error")


@router.put("/projetos/update-projetos/{id}")
async def update_projetos(id: int, payload: projetosSchema, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    headers = {"Content-Type": "application/json"}
    r = requests.put(BACKEND_URL, headers=headers + f"/update-projetos/{id}", json=payload.dict())
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HTTPException(status=404, detail="Item not found")
    else:
        raise HTTPException(status=r.status, detail="Server error")


@router.delete("/projetos/delete-projetos/{id}")
async def delete_projetos(id: int, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status_code=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    headers = {"Content-Type": "application/json"}
    r = requests.put(BACKEND_URL, headers=headers + f"/delete-projetos/{id}")
    if r.status_code == 200:
        response = r.json()
        return response
    elif r.status_code == 404:
        raise HTTPException(status_code=404, detail="Item not found")
    else:
        raise HTTPException(status_code=r.status_code, detail="Server error")
