from pydantic import BaseModel

class transacaoSchema(BaseModel):
    nome: str
    descicao: str
    data: int
    valor: int
    estado: str
