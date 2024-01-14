import requests
from io import BytesIO
import soundfile as sf

API_URL = "https://api-inference.huggingface.co/models/openai/whisper-large-v3"
headers = {"Authorization": "Bearer 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"}

def query(audio_bytes):
    print('Uploading')
    response = requests.post(API_URL, headers=headers, data=audio_bytes)
    print(response.json())
    return response.json()['text']


filename= r"C:\Users\User\Downloads\math.mp3"

# with open(filename, "rb") as f:
#     data = f.read()

def split_audio(file_path, duration=15):
    portioned_audio_data = []
    audio_data, sample_rate = sf.read(file_path)
    num_samples_per_segment = int(duration * sample_rate)
    portion= 1
    for start_sample in range(0, len(audio_data), num_samples_per_segment):
        print(portion)
        end_sample = start_sample + num_samples_per_segment
        segment = audio_data[start_sample:end_sample]

        # Convert the segment back to bytes
        buffer = BytesIO()
        sf.write(buffer, segment, sample_rate, format='mp3')
        buffer.seek(0)
        portion += 1
        portioned_audio_data.append(buffer.read())
    return portioned_audio_data

text_list= []
data = split_audio(filename)
data_counter = 1
for audio_sample in data:
    text_list.append(query(audio_sample))
    
print(' '.join(text_list))
full_data = ' '.join(text_list)
    

from openai import OpenAI
client = OpenAI(api_key="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")

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "Imagine you are a profissional acadimc teacher"},
    {"role": "user", "content": "Create a 5 questuion MCQ quiz from the followiung article and the answers would be in the list to the bottom of these 5 questions" + full_data}
  ]
)

print(completion.choices[0].message)


quiz = completion.choices[0].message.content

print("\n",quiz)
