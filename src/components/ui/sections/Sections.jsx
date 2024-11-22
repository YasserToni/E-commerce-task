import SectionCard from "./SectionCard";

function Sections() {
  return (
    <>
      <div dir="rtl" className="mr-10">
        <h1 className="font-bold text-[27px] leading-[40px] my-4 font-logo block">
          الاقسام
        </h1>
        <div className="flex gap-2 items-center overflow-auto scrollbar-hide">
          <SectionCard
            cardName="لابتوب"
            imgSrc="https://s3-alpha-sig.figma.com/img/0af5/b5e1/58ac2643528d62a5287bce2592b6c897?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SVrQlQGk~eeLWaD5XKPI3RA9QzfcyL9cGFPmY5dou5Ks7mYsM-bRb6EZIuYkkbx7BC2XEVZN-L41JwJf78xINY-Hox5KnXhMwStkhtlQZMXKH0O1eSnLsqoEc36haZXt3ElTuETdwrvVv0TM2PMpMqtXhJhYc3Z~vrvvZzSVqZEKTDHsplK5aAWbnEM5AJfgIZgNxDC7R~64ayxGr3QLT~eEfoJueBYFaHQmVqMUNpHim~xBxaUYEhavviwQ4OKL8IBfBRpobfc9bhcZ0hpt8e9Srecw5ePjvNOo6145diJkeMSFlgwhfdgDLp9LhhYKYLFiiLKCo957DFCUrvQh7Q__"
            imgAlt="Laptop"
          />
          <SectionCard
            cardName="أيباد"
            imgSrc="https://s3-alpha-sig.figma.com/img/f7c3/a178/79687bc73444edbad3a98adf3e73301d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QabG9lRJ3DQnjHLZfku1TaMADQd8Bplpdfx2TjqFQ8NQRjD1W1hRHRPEsY4J9O4nRBxnQfu8Et03kpSpIoUk3gEA8axlZbVpKgZhmjR98g~65LCZ0skhIwOkifrm3GwrbRZHYmSFxl8kkKkQMXIz75UbYaU8UOniV4ISy27h03IzkNyi1ng9b~QNe140iA2nwXFQeJ6rvvcqARRhJ6QRJWTVO9pcBij~NvapXvLXKv-tIGSnioENbpPFfz~FNL3Hg9I09P-sqnELa3~jbmCaZJHJkqpV2iLfGuRtWnYQnuoJ6oycdiqczjaxeYVr62H9yR9jFAY0enV~DfDxR9u86g__"
            imgAlt="ipad"
          />
          <SectionCard
            cardName="أيفون"
            imgSrc="https://s3-alpha-sig.figma.com/img/09bc/4dc7/ce55cdb5f3a19a01e7feb945bc56e978?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNXmT9b7UBX2uSscBuinzxKbrnpMiXRN4AGdq5IlIxhBOv73Zc7ANZldoWH4lFh3mGYJ7c6tl77w2yeE~4rjZL8477Z9F4Uiu~chGBtWqUwZRh5LPmQ2gNkGMrH-X3atR2j9py9dOVkcoXSQ4Genl3-KVCi1QtU7uF56uUzJxPvAsqYaH7X9sQBzU459Rrclqr0tf4K3dpzMkdqv8Jh2eHyXyhV5jp0JJcLl4LNzL-nreMgAKjUjBW1qtuKfk8qPsDF7v9RQDYx7OTHRx1AxIdGCcWTYdP7x3Cl2Q7XN1A2ZTVeS2~sLHfQB4rqqS-x-55DQZIpAOBjpgOwq~emeTg__"
            imgAlt="ipone"
          />
          <SectionCard
            cardName="أيباد"
            imgSrc="https://s3-alpha-sig.figma.com/img/f7c3/a178/79687bc73444edbad3a98adf3e73301d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QabG9lRJ3DQnjHLZfku1TaMADQd8Bplpdfx2TjqFQ8NQRjD1W1hRHRPEsY4J9O4nRBxnQfu8Et03kpSpIoUk3gEA8axlZbVpKgZhmjR98g~65LCZ0skhIwOkifrm3GwrbRZHYmSFxl8kkKkQMXIz75UbYaU8UOniV4ISy27h03IzkNyi1ng9b~QNe140iA2nwXFQeJ6rvvcqARRhJ6QRJWTVO9pcBij~NvapXvLXKv-tIGSnioENbpPFfz~FNL3Hg9I09P-sqnELa3~jbmCaZJHJkqpV2iLfGuRtWnYQnuoJ6oycdiqczjaxeYVr62H9yR9jFAY0enV~DfDxR9u86g__"
            imgAlt="ipad"
          />
          <SectionCard
            cardName="كاميرا"
            imgSrc="https://s3-alpha-sig.figma.com/img/6e66/8084/f01aba99dae4cc3886900267af115e2c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-hJNX0r~ofdTJlbFtCsqpcaYY6YucHtxoGWkw73SVydwWp9yxoudRkAthgvvLkuwYUDqclAa9XZqbn8JEUOQHLXMf8bJ22szJ5o4rsTSkuUtSYpwVSjnhKo01mK46iWx5tTbMSWNoPCGP0peuwS8WZg6JMBdIh935b1mPwc2~kYuuu3vg5CC~K010~bfxfixOo8JgIE0jUTocTVFR62BEVOx-iZgRC~40V3ptVp4WvRxGpwli6vtwdZPTvQhxc-eR9lgRwbcNPw3PupYrU4ksX14RNG4aagxeOouja-0jEeCByxHq7zx6GXUwzhZ94RpuKZ~xsn581xFmdSuh2LKA__"
            imgAlt="Camera"
          />
          <SectionCard
            cardName="ايبربودز"
            imgSrc="https://s3-alpha-sig.figma.com/img/1a28/69db/f1054b0b5abe1938c4e1abe53d314930?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oTlGGwUSPDJcUdYg8c7ktbPb9u8uCQL0rQAHwGdyFJL9aewKobOei1-yPBrB~iA2V4BB3tCXk8dcKMPGUOjzu~s3Hq1ZuuvTmcCG~J4LbSZTWxgZ9AxmNERCv9mxznXbufi2EIUfhl9daDMc5hvk2I1WXazg89yF7cwj6ywOeJC1Hs7z~2QEbBdncq4Wo~LqgSTOcQi4r0OT0~OzyG~lgD7WuFIqUeWkMepxaPOXyhYG3Oo7bUs0P0DXofQIlYKA-TKHT8c5bMieP~2JsB2LZU6sHHh5kuPHTPriJBk7ALR19Xy6XDvwWO6U9pHgSm5XTTWLFnRkANtbmE0raWSXgg__"
            imgAlt="airpods"
          />
        </div>
      </div>
    </>
  );
}

export default Sections;
