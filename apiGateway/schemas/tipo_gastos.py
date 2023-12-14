from pydantic import BaseModel

class tipo_gastoSchema(BaseModel):
    nome: str
    descricao: str
    estado: str
