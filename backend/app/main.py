from fastapi import FastAPI
from uuid import uuid4

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/pelayanan")
async def get_pelayanan():
    return [uuid4() for _ in range(5)]