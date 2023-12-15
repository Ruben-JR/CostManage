import os
import request

from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi import fastapi, APIRouter, Depends, HttpException, Response

from keycloak.authentication import get_user, check_user_role
from schemas.funcionarios import funcionariosSchema

load_dotenv()
BACKEND_URL = os.getenv("BACKEND_URL")

router = APIRouter(tags=["Funcionarios"])


@router.post("/funcionarios/create-funcionarios")
async def create_funcionarios(payload: funcionariosSchema, user: dict = Depends(get_user)):
    if user is None:
        raise HttpException(status=401, detail="Invalide token or user information not found")

    check_user_role(user, ["admin"])

    headers = {"content-type": "application/json"}
    r = request.post(BACKEND_URL, headers=headers + "/funcionarios/create-funcionarios", json=payload.dict())
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HttpException(status=404, detail="Intem not created")
    else:
        raise HttpException(status=r.status, detail="server error")


@router.get("/funcionarios/get-funcionarios")
async def get_funcionarios(user: dict = Depends(get_user)):
    if user is None:
        raise HttpException(status=401, detail="Inalide token or user information not found")

    check_user_role(user, ["admin"])

    r.request.get(BACKEND_URL + "/funcionarios/get-funcionarios")
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HttpException(status=404, detail="Items not found")
    else:
        raise HttpException(status=r.status, detail="server error")


@router.get("/funcionarios/get-funcionarios-id/{id}")
async def get_funcionarios_id(id: int, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    r = requests.get(BACKEND_URL + f"/funcionarios/get-funcionarios-id/{id}")
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HTTPException(status=404, detail="Item not found")
    else:
        raise HTTPException(status=r.status, detail="Server error")


@router.put("/funcionarios/update-funcionarios/{id}")
async def update_funcionarios(id: int, payload: funcionariosSchema, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    headers = {"Content-Type": "application/json"}
    r = requests.put(BACKEND_URL, headers=headers + f"/update-funcionarios/{id}", json=payload.dict())
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HTTPException(status=404, detail="Item not found")
    else:
        raise HTTPException(status=r.status, detail="Server error")


@router.delete("/funcionarios/delete-funcionarios/{id}")
async def delete_funcionarios(id: int, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status_code=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    headers = {"Content-Type": "application/json"}
    r = requests.put(BACKEND_URL, headers=headers + f"/delete-funcionarios/{id}")
    if r.status_code == 200:
        response = r.json()
        return response
    elif r.status_code == 404:
        raise HTTPException(status_code=404, detail="Item not found")
    else:
        raise HTTPException(status_code=r.status_code, detail="Server error")
