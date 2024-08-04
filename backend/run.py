from dotenv import load_dotenv
import os

load_dotenv()

from backend import create_app

app = create_app()

if __name__ == "__main__" and os.environ.get("AWS_LAMBDA_FUNCTION_NAME") is None:
    app.run(debug=True, port=3001)
