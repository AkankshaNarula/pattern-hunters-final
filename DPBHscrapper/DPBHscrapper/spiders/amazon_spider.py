import scrapy

class AmazonSpider(scrapy.Spider):
    name = 'darkpatterns'
    start_urls = ['https://www.amazon.in/s?k=headphones']

    def parse(self, response):
        products = response.css('div.s-main-slot div.s-asin')
        for product in products:
            yield {
               
                '1': product.css("span.a-color-secondary::text").get(),
                '2': product.css("span.a-badge-text::text").get(),
                '3': product.css('span.a-text-normal::text').get()

            }


        






