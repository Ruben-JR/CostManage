from pydantic import BaseModel

class tagSchema(BaseModel):
    nome: str
    descricao: str
