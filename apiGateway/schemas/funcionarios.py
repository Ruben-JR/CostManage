from pydantic import BaseModel

class funcionariosSchema(BaseModel):
    nome: str
    idade: int
    telefone: int
    morada: str
    email: str
    tipo_doc: str
    numero_doc: int
    estado: str
