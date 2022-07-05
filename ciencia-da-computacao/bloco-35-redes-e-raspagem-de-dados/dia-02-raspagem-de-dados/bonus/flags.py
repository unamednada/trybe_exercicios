from parsel import Selector
import requests

END_URL = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

response_text = requests.get(END_URL).text

gallery = Selector(response_text).css(".thumb > div > a > img::attr(src)")

for image in gallery.getall():
    print(image)
