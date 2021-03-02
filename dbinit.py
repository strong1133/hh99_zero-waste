from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from urllib.request import urlopen
from urllib.parse import quote_plus
from bs4 import BeautifulSoup
import time

# 크롬드라이버설정
chrome_driver_dir = './static/bin/chromedriver'
chrome_options = webdriver.ChromeOptions()
# chrome_options.add_argument('headless') -> 크롬 백그라운드 실행

# 드라이버로 크롬 연결 및 url설정
driver = webdriver.Chrome(
    chrome_driver_dir)  # chrome_options=chrome_options # Optional argument, if not specified will search path.및

# 인스타 태그 검색어 아스키 코드 처리  이후 확장성을 위해 검색어 별도 변수 선언
base_url = 'https://www.instagram.com/explore/tags/'
plus_url = '제로웨이스트'
url = base_url + quote_plus(plus_url)
driver.get(url);
action = ActionChains(driver)

time.sleep(1)  # 크롬 지연//

# 인스타 로그인 요청으로 인한 로그인 자동화
driver.find_elements_by_name("username")[0].send_keys("strong1133@naver.com")
driver.find_elements_by_name("password")[0].send_keys("djaak455@")
driver.find_element_by_xpath("//*[@id='loginForm']/div/div[3]/button").submit()

time.sleep(2)  # 크롬 지연//

# 로그인 후 타켓 URL 이동을 위한 URL 재 호출
driver.get(url);
time.sleep(3)  # 크롬 지연//

# 목적지 까지 크롬 이동후 bs4로 크롤링
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')

insta = soup.select('.v1Nh3.kIKUG._bz0w')
article_base = "https://www.instagram.com"
for i in insta:
    img_url = i.select_one('.KL4Bh').img['src']
    article_url = i.select_one('a')['href']
    article_url = article_base + article_url
    # print(img_url, article_url)

time.sleep(3)
driver.find_elements_by_css_selector('._9AhH0')[0].click()
time.sleep(4)
titles = driver.find_elements_by_css_selector('.sqdOP.yWX7d._8A5w5.ZIAjV')

for i in titles:
    print(i.text)

    #sd

# driver.quit()  # 메모리 절약을 위한 완료 후 크롬종료

# react-root > section > main > article > div.EZdmt > div > div > div:nth-child(1) > div:nth-child(1) > a
# react-root > section > main > article > div.EZdmt > div > div > div:nth-child(1) > div:nth-child(2) > a
#
# https://www.instagram.com/p/CLrDKosM44t/


# .sqdOP.yWX7d._8A5w5.ZIAjV
