from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import matplotlib.pyplot as plt
from wordcloud import WordCloud,STOPWORDS
stopwords = set(STOPWORDS)
from pydantic import BaseModel
import pickle

app = FastAPI()

origins = ["http://localhost",
"http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

df = joblib.load('scraper/article_df.joblib','r')
similarity = joblib.load('scraper/content_based.joblib','r')
# model = pickle.load(open('scraper/tv.pkl','rb'))

# ----------------- API ROUTES -----------------

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/recommend/{uuid}")
def recommend(uuid):
    idx = df[df['uuid'] == uuid].index[0]
    distances = similarity[idx]
    rec = sorted(list(enumerate(distances)),reverse=True,key=lambda x:x[1])[1:11]
    L = []
    for i in rec:
        L.append(df.iloc[i[0]])
    return L

class WordCloudModel(BaseModel):
    content: str

class PropagandaModel(BaseModel):
    content: str

import base64

@app.post("/propaganda")
def propaganda(body: PropagandaModel):
    return {"propaganda": model.predict([body.content])[0]}

@app.post("/wordcloud")
def wordcloud(body: WordCloudModel):
    WC = WordCloud(stopwords=stopwords,max_words=25,background_color="white").generate(body.content)
    plt.imshow(WC)
    plt.axis("off")
    # plt.show()
    plt.savefig('test.png')
    with open("test.png", "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
    return {"wordcloud": encoded_string.decode('utf-8')}

# ----------------- MODEL METHODS -----------------
