from parsel import Selector
import requests

END_URL = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

response_text = requests.get(END_URL).text

gallery = Selector(response_text).css(".thumb > div > a > img::attr(src)")

for url_image in gallery.getall():
    filename = "flags/" + url_image.split("/")[-1]
    try:
        response = requests.get("https:" + url_image, timeout=3)
        content = response.content
        with open(filename, "wb") as f:
            f.write(content)
        print(f"{filename} downloaded")
        print("-" * 20)
    except Exception as e:
        print(f"{filename} not downloaded")
        print(e)
        print("-" * 20)
        continue
