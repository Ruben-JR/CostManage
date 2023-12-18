import os
import requests

from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi import APIRouter, Depends, HTTPException, Response

from ..keycloak.keycloak_utils import get_user, check_user_role
from ..schemas.tag import tagSchema

load_dotenv()
BACKEND_URL = os.getenv("BACKEND_URL")

router = APIRouter(tags=["Tag"])


@router.post("/tag/create-tag")
async def create_tag(payload: tagSchema, user: dict = Depends(get_user)):
    if user is None:
        raise HttpException(status=401, detail="Invalide token or user information not found")

    check_user_role(user, ["admin"])

    headers = {"content-type": "application/json"}
    r = request.post(BACKEND_URL, headers=headers + "/tag/create-tag", json=payload.dict())
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HttpException(status=404, detail="Intem not created")
    else:
        raise HttpException(status=r.status, detail="server error")


@router.get("/tag/get-tag")
async def get_tag(user: dict = Depends(get_user)):
    if user is None:
        raise HttpException(status=401, detail="Inalide token or user information not found")

    check_user_role(user, ["admin"])

    r.request.get(BACKEND_URL + "/tag/get-tag")
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HttpException(status=404, detail="Items not found")
    else:
        raise HttpException(status=r.status, detail="server error")


@router.get("/tag/get-tag-id/{id}")
async def get_tag_id(id: int, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    r = requests.get(BACKEND_URL + f"/tag/get-tag-id/{id}")
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HTTPException(status=404, detail="Item not found")
    else:
        raise HTTPException(status=r.status, detail="Server error")


@router.put("/tag/update-tag/{id}")
async def update_tag(id: int, payload: tagSchema, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    headers = {"Content-Type": "application/json"}
    r = requests.put(BACKEND_URL, headers=headers + f"/update-tag/{id}", json=payload.dict())
    if r.status == 200:
        response = r.json()
        return response
    elif r.status == 404:
        raise HTTPException(status=404, detail="Item not found")
    else:
        raise HTTPException(status=r.status, detail="Server error")


@router.delete("/tag/delete-tag/{id}")
async def delete_tag(id: int, user: dict = Depends(get_user)):
    if user is None:
        raise HTTPException(status_code=401, detail="Invalid token or user information not found")

    check_user_role(user, ['Admin'])

    headers = {"Content-Type": "application/json"}
    r = requests.put(BACKEND_URL, headers=headers + f"/delete-tag/{id}")
    if r.status_code == 200:
        response = r.json()
        return response
    elif r.status_code == 404:
        raise HTTPException(status_code=404, detail="Item not found")
    else:
        raise HTTPException(status_code=r.status_code, detail="Server error")
