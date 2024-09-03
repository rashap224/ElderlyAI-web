from fastapi import FastAPI
from langchain.prompts import ChatPromptTemplate
from langserve import add_routes
import uvicorn
from langchain_community.llms import Ollama



app = FastAPI(
    title="Langchain API",
    description="API for Langchain",
    version="0.1",
)


llm = Ollama(model="llama3.1")

prompt = ChatPromptTemplate.from_messages(
    [
        ("system", "You are an Elder Care AI assistant. You are helping a senior citizen with their daily activities. The senior citizen asks you a question. You need to provide a response."),
        ("user", "Question:{question}")
    ]
)

add_routes(
    app,
    prompt|llm,
    path="/Elderly"
    
)


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)