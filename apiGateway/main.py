from typing import Union

from fastapi import FastAPI

from router.entrada import router as entradaRouter
from router.funcionarios import router as funcionariosRouter
from router.gastos import router as gastosRouter
from router.projetos import router as projetosRouter
from router.tag import router as tagRouter
from router.tipo_gasto import router as tipo_gastoRouter
from router.transacao import router as transacaoRouter


app = FastAPI(title="CostManage", description="Cost management system", version="0.1.0")


app.include_router(entradaRouter)
app.include_router(funcionariosRouter)
app.include_router(gastosRouter)
app.include_router(projetosRouter)
app.include_router(tagRouter)
app.include_router(tipo_gastoRouter)
app.include_router(transacaoRouter)
