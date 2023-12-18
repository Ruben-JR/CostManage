from pydantic import BaseModel

class tipo_gastosSchema(BaseModel):
    nome: str
    descricao: str
    estado: str
