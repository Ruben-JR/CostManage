from pydantic import BaseModel

class loginSchema(BaseModel):
    username: str
    password: str

class registerSchema(BaseModel):
    userName: str
    firstName: str
    lastName: str
    email: str
    password: str
    phone: int

class userUpdateSchema(BaseModel):
    userName: str
    firstName: str
    lastName: str
    password: str
    phone: str

class changePasswordSchema(BaseModel):
    old_password: str
    new_password: str
