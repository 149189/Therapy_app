import chromadb
from doc import documents

chroma_client = chromadb.PersistentClient(path="./chromadb")
collection = chroma_client.get_or_create_collection("documents")

for doc in documents:
    collection.add(documents=[doc["content"]], ids=[doc["id"]])