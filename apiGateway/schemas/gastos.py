from pydantic import BaseModel

class gastosSchema(BaseModel):
    nome: str
    valor: int
    estado: str
    descricao: str
    data: int
    tipo: str
    comprovativo: str
