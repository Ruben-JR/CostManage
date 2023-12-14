from pydantic import BaseModel

class projetosSchema(BaseModel):
    nome; str
    descrisao: str
    dataInicio: int
    dataFinal: int
    valorTotal: int
    estado: str
    tipo: str
