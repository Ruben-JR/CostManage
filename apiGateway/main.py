from typing import Union

from fastapi import FastAPI

from .routes.entrada import router as entradaRouter
from .routes.funcionarios import router as funcionariosRouter
from .routes.gastos import router as gastosRouter
from .routes.projetos import router as projetosRouter
from .routes.tag import router as tagRouter
from .routes.tipo_gastos import router as tipo_gastosRouter
from .routes.transacao import router as transacaoRouter


app = FastAPI(title="CostManage", description="Cost management system", version="0.1.0")


app.include_router(entradaRouter)
app.include_router(funcionariosRouter)
app.include_router(gastosRouter)
app.include_router(projetosRouter)
app.include_router(tagRouter)
app.include_router(tipo_gastosRouter)
app.include_router(transacaoRouter)
