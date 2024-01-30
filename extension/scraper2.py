import requests 
from bs4 import BeautifulSoup 
  
URL = "https://amazon.in" 
r = requests.get(URL) 
  
soup = BeautifulSoup(r.content, 'html5lib')
print(soup.prettify()) 