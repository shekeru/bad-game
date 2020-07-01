from PIL import Image
import json

img = Image.open("v2.png")
pixels = img.convert('RGB').load()
Array1 = [[pixels[x, y]
    for x in range(img.width)]
    for y in range(img.height)]
NtC = dict(enumerate({
    x for y in Array1 for x in y}))
CtN = dict(map(lambda x: x[::-1], NtC.items()))
Out = [[CtN[x] for x in y] for y in Array1]

out = json.dumps({
    "data": Out,
    "lookup": NtC,
})
