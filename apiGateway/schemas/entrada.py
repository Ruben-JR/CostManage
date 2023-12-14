from pydantic import BaseModel

class entradaSchema(BaseModel):
    nome: str
    descricao: str
    data: int
    estado: str
    valor: int
    comporvativo: str
