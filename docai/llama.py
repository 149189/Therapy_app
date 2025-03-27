import ollama
from db import collection

query_text = "Explain Rag in simple terms."
retrieved_doc = collection.query(query_texts=[query_text], n_results=1)["documents"][0]

prompt = f"Use the following context to answer: {retrieved_doc}\n\n User Query: {query_text}"
response = ollama.chat(model="mistral", messages=[{"role": "user", "content": prompt}])

print(response["message"])