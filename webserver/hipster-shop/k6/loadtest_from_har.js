// Creator: WebInspector 537.36

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group(
    'page_24 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            'Cache-Control': 'max-age=0',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css'
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/tank-top.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/watch.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/loafers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/hairdryer.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/salt-and-pepper-shakers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/bamboo-glass-jar.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer: 'https://fonts.googleapis.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer: 'https://fonts.googleapis.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/images/folded-clothes-on-white-chair.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/styles/styles.css',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
    }
  )

  group(
    'page_7 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css'
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/tank-top.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/watch.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
    }
  )

  group(
    'page_9 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/66VCHSJNUP',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/66VCHSJNUP',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css'
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/66VCHSJNUP',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/66VCHSJNUP',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/66VCHSJNUP',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/tank-top.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/66VCHSJNUP',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/watch.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/66VCHSJNUP',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/66VCHSJNUP',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/bamboo-glass-jar.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/66VCHSJNUP',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/salt-and-pepper-shakers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/66VCHSJNUP',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer: 'https://fonts.googleapis.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer: 'https://fonts.googleapis.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
    }
  )

  group(
    'page_11 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/1YMWWN1N4O',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/1YMWWN1N4O',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css'
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/1YMWWN1N4O',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/1YMWWN1N4O',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/1YMWWN1N4O',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/watch.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/1YMWWN1N4O',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/hairdryer.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/1YMWWN1N4O',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/loafers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/1YMWWN1N4O',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/bamboo-glass-jar.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/1YMWWN1N4O',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/1YMWWN1N4O',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
    }
  )

  group(
    'page_13 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/L9ECAV7KIM',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/L9ECAV7KIM',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css'
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/L9ECAV7KIM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/L9ECAV7KIM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/L9ECAV7KIM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/loafers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/L9ECAV7KIM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/L9ECAV7KIM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/L9ECAV7KIM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/tank-top.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/L9ECAV7KIM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/L9ECAV7KIM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
    }
  )

  group(
    'page_15 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/2ZYFJ3GM2N',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/2ZYFJ3GM2N',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/2ZYFJ3GM2N',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/2ZYFJ3GM2N',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/2ZYFJ3GM2N',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/hairdryer.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/2ZYFJ3GM2N',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/watch.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/2ZYFJ3GM2N',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/2ZYFJ3GM2N',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/2ZYFJ3GM2N',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/2ZYFJ3GM2N',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
    }
  )

  group(
    'page_17 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/salt-and-pepper-shakers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/loafers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/tank-top.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
    }
  )

  group(
    'page_19 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/6E92ZMYYFZ',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/6E92ZMYYFZ',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/6E92ZMYYFZ',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/6E92ZMYYFZ',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/6E92ZMYYFZ',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/6E92ZMYYFZ',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/6E92ZMYYFZ',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/6E92ZMYYFZ',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/salt-and-pepper-shakers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/6E92ZMYYFZ',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/loafers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/6E92ZMYYFZ',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
    }
  )

  group(
    'page_21 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/bamboo-glass-jar.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/loafers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/tank-top.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/hairdryer.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
    }
  )

  group(
    'page_23 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/LS4PSXUNUM',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/LS4PSXUNUM',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/LS4PSXUNUM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/LS4PSXUNUM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/LS4PSXUNUM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/salt-and-pepper-shakers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/LS4PSXUNUM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/hairdryer.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/LS4PSXUNUM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/LS4PSXUNUM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/LS4PSXUNUM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/watch.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/LS4PSXUNUM',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
    }
  )

  group(
    'page_25 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/hairdryer.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/loafers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/salt-and-pepper-shakers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer: 'https://fonts.googleapis.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer: 'https://fonts.googleapis.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
    }
  )

  group(
    'page_26 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
    function () {
      response = http.post(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
        {
          product_id: 'OLJCESPC7Z',
          quantity: '1',
        },
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            'Cache-Control': 'max-age=0',
            Connection: 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            'Cache-Control': 'max-age=0',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/OLJCESPC7Z',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/loafers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/watch.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )

      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
    }
  )

  group(
    'page_27 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/tank-top.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/watch.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/loafers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/hairdryer.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/salt-and-pepper-shakers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/bamboo-glass-jar.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/images/folded-clothes-on-white-chair.jpg',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
    }
  )

  group(
    'page_28 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/watch.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/bamboo-glass-jar.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/tank-top.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
    }
  )

  group(
    'page_29 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
    function () {
      response = http.post(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
        {
          product_id: '0PUK6V6EV0',
          quantity: '1',
        },
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            'Cache-Control': 'max-age=0',
            Connection: 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            'Cache-Control': 'max-age=0',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/0PUK6V6EV0',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/tank-top.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/loafers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/watch.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )

      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
    }
  )

  group(
    'page_30 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/tank-top.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/watch.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/loafers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/hairdryer.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/salt-and-pepper-shakers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/bamboo-glass-jar.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/images/folded-clothes-on-white-chair.jpg',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
    }
  )

  group(
    'page_31 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/bamboo-glass-jar.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/loafers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/hairdryer.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
    }
  )

  group(
    'page_32 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
    function () {
      response = http.post(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
        {
          product_id: '9SIQT8TOJO',
          quantity: '1',
        },
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            'Cache-Control': 'max-age=0',
            Connection: 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            'Cache-Control': 'max-age=0',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/product/9SIQT8TOJO',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/bamboo-glass-jar.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/tank-top.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/loafers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/watch.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )

      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
    }
  )

  group(
    'page_33 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/bamboo-glass-jar.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/tank-top.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/loafers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/watch.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
    }
  )

  group(
    'page_34 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart/checkout',
    function () {
      response = http.post(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart/checkout',
        {
          email: 'someone@example.com',
          street_address: '1600+Amphitheatre+Parkway',
          zip_code: '94043',
          city: 'Mountain+View',
          state: 'CA',
          country: 'United+States',
          credit_card_number: '4432-8015-6152-0454',
          credit_card_expiration_month: '1',
          credit_card_expiration_year: '2023',
          credit_card_cvv: '672',
        },
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            'Cache-Control': 'max-age=0',
            Connection: 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart/checkout',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart/checkout',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/bamboo-glass-jar.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart/checkout',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/hairdryer.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart/checkout',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/watch.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart/checkout',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/salt-and-pepper-shakers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart/checkout',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )

      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Referer: '',
          },
        }
      )

      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
    }
  )

  group(
    'page_35 - http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
    function () {
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
        {
          headers: {
            Accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8',
            Connection: 'keep-alive',
            Cookie: 'shop_session-id=25902c4f-1820-43ce-bf55-a14eae95449a',
            Host: 'k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/cart/checkout',
            'Sec-GPC': '1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_NavLogo.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_DownArrow.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/icons/Hipster_CartIcon.svg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/sunglasses.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/tank-top.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/watch.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/loafers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/hairdryer.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/candle-holder.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/salt-and-pepper-shakers.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/bamboo-glass-jar.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/img/products/mug.jpg',
        {
          headers: {
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer:
              'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer: 'https://fonts.googleapis.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2',
        {
          headers: {
            Origin: 'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com',
            Referer: 'https://fonts.googleapis.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/images/folded-clothes-on-white-chair.jpg',
        {
          headers: {
            Referer: '',
          },
        }
      )
      response = http.get(
        'http://k8s-hipsterd-frontend-215188744a-345255813.us-east-1.elb.amazonaws.com/static/favicon.ico'
      )
    }
  )

  // Automatically added sleep
  sleep(1)
}
