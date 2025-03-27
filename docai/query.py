from db import collection

query_text = "What is ollama?"
result = collection.query(query_texts=[query_text], n_results=1)

print("Top Document:", result["documents"][0])