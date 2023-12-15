import os
import request

from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi import fastapi, APIRouter, Depends, HttpException, Response

from keycloak.authentication import get_user, check_user_role
from schemas.transacao import transacaoSchema

load_dotenv()
BACKEND_URL = os.getenv("BACKEND_URL")

router = APIRouter(tags=["Transação"])


@router.post("/transacao/create-transacao")
async def create_transacao(payload: transacaoSchema, user: dict = Depends(get_user)):
    if user is None:
        raise HttpException(status=401, detail="Invalide token or user information not found")

    check_user_role(user, ["admin"])

    headers = {"content-type": "application/json"}
    r = request.post(BACKEND_URL, headers=headers + "/transacao/create-transacao", json=payload.dict())
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HttpException(status=404, detail="Intem not created")
    else:
        raise HttpException(status=r.status, detail="server error")


@router.get("/transacao/get-transacao")
async def get_transacao(user: dict = Depends(get_user)):
    if user is None:
        raise HttpException(status=401, detail="Inalide token or user information not found")

    check_user_role(user, ["admin"])

    r.request.get(BACKEND_URL + "/transacao/get-transacao")
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HttpException(status=404, detail="Items not found")
    else:
        raise HttpException(status=r.status, detail="server error")


@router.get("/transacao/get-transacao-id/{id}")
async def get_transacao_id(id: int, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    r = requests.get(BACKEND_URL + f"/transacao/get-transacao-id/{id}")
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HTTPException(status=404, detail="Item not found")
    else:
        raise HTTPException(status=r.status, detail="Server error")


@router.put("/transacao/update-transacao/{id}")
async def update_transacao(id: int, payload: transacaoSchema, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    headers = {"Content-Type": "application/json"}
    r = requests.put(BACKEND_URL, headers=headers + f"/update-transacao/{id}", json=payload.dict())
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HTTPException(status=404, detail="Item not found")
    else:
        raise HTTPException(status=r.status, detail="Server error")


@router.delete("/transacao/delete-transacao/{id}")
async def delete_transacao(id: int, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status_code=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    headers = {"Content-Type": "application/json"}
    r = requests.put(BACKEND_URL, headers=headers + f"/delete-transacao/{id}")
    if r.status_code == 200:
        response = r.json()
        return response
    elif r.status_code == 404:
        raise HTTPException(status_code=404, detail="Item not found")
    else:
        raise HTTPException(status_code=r.status_code, detail="Server error")
