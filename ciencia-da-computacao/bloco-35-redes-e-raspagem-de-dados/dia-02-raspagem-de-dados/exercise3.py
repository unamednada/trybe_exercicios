import requests


response = requests.get(
    'https://scrapethissite.com/pages/advanced/?gotcha=headers',
    headers={'User-Agent': 'Mozilla/5.0', 'Accept': 'text/html'}
)


assert "bot detected" not in response.text
